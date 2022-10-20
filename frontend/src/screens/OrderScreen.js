import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Row, Col, ListGroup, Image, Card, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {getOrderDetails, payOrder, deliverOrder} from "../actions/orderActions";
import {ORDER_PAY_RESET, ORDER_DELIVER_RESET} from "../constants/orderConstants";
import STRIPE_PUBLIC_KEY from "../constants/stripePublicKey";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../components/ChechoutForm";

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const OrderScreen = ({match, history}) => {
	const [clientSecret, setClientSecret] = useState("");

	const orderId = match.params.id;

	const dispatch = useDispatch();

	const orderDetails = useSelector((state) => state.orderDetails);
	const {order, loading, error} = orderDetails;

	const orderPay = useSelector((state) => state.orderPay);
	const {loading: loadingPay, success: successPay} = orderPay;

	const orderDeliver = useSelector((state) => state.orderDeliver);
	const {loading: loadingDeliver, success: successDeliver} = orderDeliver;

	const userLogin = useSelector((state) => state.userLogin);
	const {userInfo} = userLogin;

	if (!loading) {
		//   Calculate prices
		const addDecimals = (num) => {
			return (Math.round(num * 100) / 100).toFixed(2);
		};

		order.itemsPrice = addDecimals(
			order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
		);
	}

	useEffect(() => {
		if (!userInfo) {
			history.push("/login");
		}

		if (!order || successPay || successDeliver || order._id !== orderId) {
			dispatch({type: ORDER_PAY_RESET});
			dispatch({type: ORDER_DELIVER_RESET});
			dispatch(getOrderDetails(orderId));
		}
	}, [dispatch, orderId, successPay, successDeliver, order, history, userInfo]);

	//get user secret
	useEffect(() => {
		if (!orderDetails.loading && !order.isPaid) {
			const orderItems = {
				items: orderDetails.order.orderItems.map((item) => ({
					_id: item.product,
					quantity: item.qty
				}))
			};

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userInfo.token}`
				}
			};

			axios
				.post("/api/orders/create-payment-intent", orderItems, config)
				.then((res) => {
					setClientSecret(res.data.clientSecret);
				})
				.catch((err) => console.log(err));
		}
	}, [orderDetails, userInfo, order]);

	const appearance = {
		theme: "stripe"
	};
	const options = {
		clientSecret,
		appearance
	};

	const successPaymentHandler = (paymentResult) => {
		dispatch(payOrder(orderId, paymentResult));
	};

	const deliverHandler = () => {
		dispatch(deliverOrder(order));
	};

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant="danger">{error}</Message>
	) : (
		<>
			<h1>Order {order._id}</h1>
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								<strong>Name: </strong> {order.user.name}
							</p>
							<p>
								<strong>Email: </strong>{" "}
								<a href={`mailto:${order.user.email}`}>{order.user.email}</a>
							</p>
							<p>
								<strong>Address:</strong>
								{order.shippingAddress.address}, {order.shippingAddress.city}{" "}
								{order.shippingAddress.postalCode}, {order.shippingAddress.country}
							</p>
							{order.isDelivered ? (
								<Message variant="success">Delivered on {order.deliveredAt}</Message>
							) : (
								<Message variant="danger">Not Delivered</Message>
							)}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong>Method: </strong>
								{order.paymentMethod}
							</p>
							{order.isPaid ? (
								<Message variant="success">Paid on {order.paidAt}</Message>
							) : (
								<Message variant="danger">Not Paid</Message>
							)}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Order Items</h2>
							{order.orderItems.length === 0 ? (
								<Message>Order is empty</Message>
							) : (
								<ListGroup variant="flush">
									{order.orderItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={1}>
													<Image src={item.images[0]} alt={item.name} fluid rounded />
												</Col>
												<Col>
													<Link to={`/product/${item.product}`}>{item.name}</Link>
												</Col>
												<Col md={4}>
													{item.qty} x ${item.price} = ${item.qty * item.price}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Items</Col>
									<Col>${order.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>${order.shippingPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>${order.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Total</Col>
									<Col>${order.totalPrice}</Col>
								</Row>
							</ListGroup.Item>
							{!order.isPaid && (
								<ListGroup.Item>
									{loadingPay && <Loader />}
									{!clientSecret ? (
										<Loader />
									) : (
										<Elements options={options} stripe={stripePromise}>
											<CheckoutForm
												successPaymentHandler={successPaymentHandler}
												userEmail={userInfo.email}
											/>
										</Elements>
									)}
								</ListGroup.Item>
							)}
							{loadingDeliver && <Loader />}
							{userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
								<ListGroup.Item>
									<Button
										type="button"
										className="btn btn-block"
										onClick={deliverHandler}
									>
										Mark As Delivered
									</Button>
								</ListGroup.Item>
							)}
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default OrderScreen;
