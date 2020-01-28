import React from 'react'
import './style.scss'
const CustomButton = ({ children, className = 'primary', disabled, ...otherProps }) => {
    return (
        <button className={`custom-button ${className} `} disabled={disabled}{...otherProps}>
            {children}
        </button>
    )
}

export { CustomButton }
