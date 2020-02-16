import React from 'react'
import { ReactComponent as Cart } from '../../@assets/shopping-bag.svg'
import { carItemCountSelector } from '../../@redux/selects/cart.select'
import './style.scss'
import { connect } from 'react-redux'
import { changeDropdown } from '../../@redux/actions/cart.actions'



const _CartIcon = ({ changeDropdown, totalItems }) => {
    return (
        <div className='cart-icon' onClick={changeDropdown}>
            <Cart className='shopping-icon '></Cart>
            <span className='item-count'> {
                totalItems
            } </span>
        </div>
    )
}
const mapStateToProps = (state) => ({
    totalItems: carItemCountSelector(state)

})



const mapDispatchToProps = dispatch => ({
    changeDropdown: cart => dispatch(changeDropdown(cart)),
})
const CartIcon = connect(mapStateToProps, mapDispatchToProps)(_CartIcon)
export { CartIcon }
