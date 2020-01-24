import React from 'react'
import './style.scss'

const MenuItem = ({ title, id }) => {
    return (
        <div key={id} className='menu-item'>
            <div className='content'>
                <h1> {title}</h1>
                <span>SHOP NOW!</span>
            </div>
        </div>
    )
}
MenuItem.defaultProps = {
}
export { MenuItem }
