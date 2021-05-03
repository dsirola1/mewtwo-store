import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function CheckoutButton() {
	const pushlishableKey =
		'pk_test_51Imi4SIAnLFPMvKfMUV8zcYvy6D6iOMpX6IN62VrIsQob9bqyZ0sK9sT1kzbXhiUA6JYfg5DE9s92CAaPuXBmVKq00cWn7LFMx';

	const onToken = (token) => {
		console.log(token);
	};
	return (
		<StripeCheckout
			name='The MewTwoStore'
			token={onToken}
			stripeKey={pushlishableKey}
			shippingAddress
			billingAddress
			zipCode
			panelLabel='Pay Now'
			description='Your total is $20'
			amount={2000000}
		/>
	);
}
