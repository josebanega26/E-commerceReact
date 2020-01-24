import React from 'react'
import './style.scss'

const MenuItem = ({ title, id, imgUrl }) => {
    return (
        <div key={id}
            className='menu-item'
            style={{
                backgroundImage: `url(${imgUrl})`
            }}>
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
