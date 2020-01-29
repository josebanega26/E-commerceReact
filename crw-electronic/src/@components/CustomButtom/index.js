import React from 'react'
import './style.scss'
const CustomButton = ({ inverse, children, className = 'primary', disabled, ...otherProps }) => {
    return (
        <button
            className={`
        custom-button 
        ${className} 
        ${inverse ? 'inverted' : ''}`}
            disabled={disabled}{...otherProps}>
            {children}
        </button>
    )
}

export { CustomButton }
