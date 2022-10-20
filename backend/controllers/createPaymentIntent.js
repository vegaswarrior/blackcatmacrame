import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
import Product from "../models/productModel.js";

const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

const addDecimals = (num) => {
	return (Math.round(num * 100) / 100).toFixed(2);
};
const addProductsPrice = async (items) => {
	return await Promise.all(
		items.map((item) => {
			return new Promise((resolve, reject) => {
				Product.findById(item._id, "price", (err, price) => {
					if (err) reject(err);
					item.price = price.price;
					resolve(item);
				});
			});
		})
	);
};

const calculateOrderAmount = async (items) => {
	const itemsWithPrice = await addProductsPrice(items);
	const itemsPrice = addDecimals(
		itemsWithPrice.reduce((acc, item) => acc + item.price * item.quantity, 0)
	);
	const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 5);
	const taxPrice = addDecimals(Number((0.08 * itemsPrice).toFixed(2)));
	const totalPrice = (
		Number(itemsPrice) +
		Number(shippingPrice) +
		Number(taxPrice)
	).toFixed(2);

	return Number(totalPrice) * 100;
};

export default async function createPaymentIntent(req, res) {
	const {items} = req.body;
	const totalPrice = await calculateOrderAmount(items);

	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: totalPrice,
			currency: "usd",
			automatic_payment_methods: {
				enabled: true
			}
		});

		res.status(200).json({
			clientSecret: paymentIntent.client_secret
		});
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}
