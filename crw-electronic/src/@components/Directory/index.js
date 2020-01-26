import React, { useState, useEffect } from 'react'
import { sections as Mock } from './mockData'
import { MenuItem } from '../index'

import './style.scss'
const Directory = (props) => {

    const [sections, setSections] = useState([])
    // this will simulate a API CALL 
    useEffect(() => {
        setTimeout(() => { setSections(Mock) }, 1000)
    }, [])
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...rest }) => (<MenuItem
                id={id}
                key={id}
                {...rest} />))}
        </div>
    )
}

export { Directory }