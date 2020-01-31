import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { cartItemSelector, carItemTotalPriceSelector } from '../../@redux/selects/cart.select'
import { CheckoutItem } from '../../@components'
const _Checkout = (props) => {
    console.log('props checkout', props)
    const { totalPrice, cartItems } = props;
    console.log('cartItems', cartItems)
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span> Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Delete</span>
                </div>
            </div>
            {
                cartItems.map(item => (<CheckoutItem key={item.id} item={item}></CheckoutItem>))
            }
            <div className='total'> <span>TOTAL:  {totalPrice} $</span></div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cartItems: cartItemSelector(state),
    totalPrice: carItemTotalPriceSelector(state)
})

const mapDispatchToProps = {

}
const Checkout = connect(mapStateToProps, mapDispatchToProps)(_Checkout)
export { Checkout }
