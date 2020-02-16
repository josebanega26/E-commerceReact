import React from 'react'
import { CustomButton } from '../index'
import './style.scss'
import { connect } from 'react-redux'
import { CartItem } from '../index'
import { navigate } from "@reach/router"
import { changeDropdown } from '../../@redux/actions/cart.actions'
const _CartDropdown = (props) => {
    const { cartItems, dispatch } = props
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length > 0 ? cartItems.map(item => (
                    <CartItem {...item}></CartItem>
                ))
                    : <span className='empty'> The carrito is empty</span>
                }
            </div>
            <CustomButton
                onClick={() => {
                    dispatch(changeDropdown())
                    navigate("/checkout")
                }}> CHECK OUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

const CartDropdown = connect(mapStateToProps)(_CartDropdown)

export { CartDropdown }
