import React from 'react'
import './style.scss'

const CartItem = ({ imageUrl, id, name, quantity, price }) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name}></img>
            <div className='item-details'>
                <p className='name'>{name}</p>
                <p>{quantity} x {price}</p>
            </div>
        </div>
    )
}


export { CartItem }
