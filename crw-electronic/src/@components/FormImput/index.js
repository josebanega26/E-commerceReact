import React from 'react'
import './style.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    const classLabel = otherProps.value.length ? 'shrink' : ''
    return (
        <div className='group'>
            {label ? (<label className={`${classLabel} form-input-label`}
            >{label}</label>) : null}
            <input onChange={handleChange} {...otherProps} className="form-input" />
        </div>
    )
}

export { FormInput }
