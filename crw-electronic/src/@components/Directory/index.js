import React, { useState, useEffect } from 'react'
import { sections as Mock } from './mockData'
import { MenuItem } from '../index'
const Directory = (props) => {

    const [sections, setSections] = useState([])
    // this will simulate a API CALL 
    useEffect(() => {
        setTimeout(() => { setSections(Mock) }, 1000)
    }, [])
    return (
        <div>
            {sections.map((id, imgUrl, title) => (<MenuItem id={id} imgUrl={imgUrl} />))}
        </div>
    )
}

export { Directory }
