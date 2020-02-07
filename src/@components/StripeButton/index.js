import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../@assets/logo.svg'
const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = 'pk_test_i8aETzzPuCfUnZFg3BaVZ2y800wv4s3UW1'
    const onToken = token => {
        alert('Payment successfull')
    }
    return (

        <StripeCheckout
            label='Pay now'
            name='CRW electronic'
            billingAddress
            shippingAddress
            bitcoin
            image={logo}
            description={`The total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publicKey}>

        </StripeCheckout>
    )
}

export { StripeButton }