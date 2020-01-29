import React from 'react'
import { CustomButton } from '../index'
import './style.scss'

const CartDropdown = (props) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton> CHECK OUT</CustomButton>
        </div>
    )
}

export { CartDropdown }
