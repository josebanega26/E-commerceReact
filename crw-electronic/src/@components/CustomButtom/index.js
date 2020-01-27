import React from 'react'
import './style.scss'
const CustomButton = ({ children, className = 'primary', ...otherProps }) => {
    return (
        <button className={`custom-button ${className} `} {...otherProps}>
            {children}
        </button>
    )
}

export { CustomButton }
