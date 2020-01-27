import React from 'react'
import './style.scss'
import { Link } from "@reach/router"

const MenuItem = ({ title, id, imgUrl, size, linkUrl }) => {
    console.log('size', size)
    return (
        <div key={id} className={`${size} menu-item`}>
            <Link
                className='background-image'
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
                to={linkUrl} />
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
