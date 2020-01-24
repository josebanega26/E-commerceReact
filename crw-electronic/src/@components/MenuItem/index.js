import React from 'react'
import './style.scss'

const MenuItem = ({ title, id, imgUrl, size }) => {
    console.log('size', size)
    return (
        <div key={id} className={`${size} menu-item`}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imgUrl})`
                }} />
            <div className='content'>
                <h1 className='title'> {title.toUpperCase()}</h1>
                <span className='subtitle '>Show Now!</span>
            </div>
        </div >
    )
}
MenuItem.defaultProps = {
}
export { MenuItem }
