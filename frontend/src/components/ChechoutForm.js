import React, {useEffect, useState} from "react";
import {PaymentElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {Button} from "react-bootstrap";

export default function CheckoutForm({successPaymentHandler}) {
	const stripe = useStripe();
	const elements = useElements();

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret"
		);

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
			switch (paymentIntent.status) {
				case "succeeded":
					setMessage("Payment succeeded!");
					break;
				case "processing":
					setMessage("Your payment is processing.");
					break;
				case "requires_payment_method":
					setMessage("Your payment was not successful, please try again.");
					break;
				default:
					setMessage("Something went wrong.");
					break;
			}
		});
	}, [stripe]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setIsLoading(true);

		const res = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url:
					window.location.protocol +
					"//" +
					window.location.host +
					"/" +
					window.location.pathname +
					window.location.search
			}
		});

		if (res.paymentIntent) {
			console.log("okkkkkkkk");
			//change res.paymentIntent in function
			// order.paymentResult = {
			//     id: req.body.id,
			//     status: req.body.status,
			//     update_time: req.body.update_time,
			//     email_address: req.body.payer.email_address
			// };
			successPaymentHandler(res.paymentIntent);
		}

		if (res.error.type === "card_error" || res.error.type === "validation_error") {
			setMessage(res.error.message);
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);
	};

	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			<PaymentElement id="payment-element" />
			<button
				disabled={isLoading || !stripe || !elements}
				id="submit"
				className="mt-2 tbn btn-primary"
			>
				<span id="button-text">
					{isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
				</span>
			</button>
			{/* Show any error or success messages */}
			{message && <div id="payment-message">{message}</div>}
		</form>
	);
}
