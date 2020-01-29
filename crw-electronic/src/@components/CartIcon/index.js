import React from 'react'
import { ReactComponent as Cart } from '../../@assets/shopping-bag.svg'
import './style.scss'
import { connect } from 'react-redux'
import { changeDropdown } from '../../@redux/actions/cart.actions'

const _CartIcon = ({ changeDropdown }) => {
    return (
        <div className='cart-icon' onClick={changeDropdown}>
            <Cart className='shopping-icon '></Cart>
            <span className='item-count'> 0 </span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    changeDropdown: cart => dispatch(changeDropdown(cart))
})
const CartIcon = connect(null, mapDispatchToProps)(_CartIcon)
export { CartIcon }
