import React, {useEffect, useState} from "react";
import {PaymentElement, useStripe, useElements} from "@stripe/react-stripe-js";

export default function CheckoutForm({successPaymentHandler, userEmail}) {
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
				return_url:
					window.location.protocol +
					"//" +
					window.location.host +
					"/" +
					window.location.pathname +
					window.location.search,
				receipt_email: userEmail
			},
			redirect: "if_required"
		});

		if (res.paymentIntent) {
			const paymentIntent = res.paymentIntent;
			const paymentResult = {
				id: paymentIntent.id,
				status: paymentIntent.status,
				update_time: paymentIntent.created,
				email_address: paymentIntent.receipt_email
			};
			successPaymentHandler(paymentResult);
		} else {
			if (res.error.type === "card_error" || res.error.type === "validation_error") {
				setMessage(res.error.message);
			} else {
				setMessage("An unexpected error occurred.");
			}
		}

		setIsLoading(false);
	};

	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			<PaymentElement id="payment-element" />
			<button
				disabled={isLoading || !stripe || !elements}
				id="submit"
				className="btn btn-primary mt-2"
			>
				<span id="button-text">
					{isLoading ? (
						<div className="spinner-border text-light" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					) : (
						"Pay now"
					)}
				</span>
			</button>
			{/* Show any error or success messages */}
			{message && <div id="payment-message">{message}</div>}
		</form>
	);
}
