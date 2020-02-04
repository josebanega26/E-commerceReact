import React from 'react'
import './styles.scss'
import { Directory } from '../../@components'
//Home Page of the E-commerce App


const HomePage = (props) => {
    return (
        <div className='homepage'>
            <div className="directory-Menu">
                <Directory />
            </div>
        </div>
    )
}


export { HomePage }
