import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Row, Col, Container, Button} from "react-bootstrap";
import {Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Reviews from "../components/Reviews";
import Meta from "../components/Meta";
import {listProducts} from "../actions/productActions";
import "./homescreen.css";

const HomeScreen = ({match}) => {
	const keyword = match.params.keyword;

	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const {loading, error, products, page, pages} = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
			<Container fluid className="main mb-1 d-flex flex-column justify-content-center">
				<h1 className="text-center jumboH1 text-info">Welcome To Black Cat Macrame</h1>
				<h4 className="text-center jumboH2">
					Designing Beautiful Handmade Macrame Jewelry.
				</h4>{" "}
				<br />
				
				   <Button className="first_button" href="/collections">Discover More</Button>
				
				
				<Col className="cat_col d-flex justify-content-between align-items-end">
					<img src="../images/blackcat6.jpg" className="cat_image"  alt="black cata"></img>
					<img src="../images/blackcat5.jpg" className="cat_image" alt="black cata"></img>
				</Col>
			</Container>
			<Container fluid className="featured_products_container">
				
					<Meta />
					<h1 className="latest_products text-center">Latest Products</h1>
					{loading ? (
						<Loader />
					) : error ? (
						<Message variant="danger">{error}</Message>
					) : (
						<>
							<Row className="product_row">
								{products.map((product) => (
									<Col key={product._id} >
										<div className="product_div">
										   <Product product={product} />
										</div>
										
									</Col>
								))}
							</Row>
							<Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
						</>
					)}
			
			</Container>
			<Reviews />
		</>
	);
};

export default HomeScreen;