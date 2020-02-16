import React, { useState, useEffect } from 'react'
//import { sections as Mock } from './mockData'
import { MenuItem } from '../index'
import { directorySectionsSelector } from "../../@redux/selects/directory.select";
import { connect } from 'react-redux'
import './style.scss'
const _Directory = ({ mockSections }) => {
    const [sections, setSections] = useState([])
    // this will simulate a API CALL 
    useEffect(() => {
        setTimeout(() => { setSections(mockSections) }, 1000)
    }, [mockSections])
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...rest }) => (<MenuItem
                id={id}
                key={id}
                {...rest} />))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    mockSections: directorySectionsSelector(state)
})



const Directory = connect(mapStateToProps)(_Directory)

export { Directory }
