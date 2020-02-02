import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

const _Collection = (props) => {
    const { idCollection } = props;
    console.log('props collection', props)
    return (
        <div className='collection-page'>
            <h2>
                Collection {idCollection}
            </h2>
        </div>
    )
}
const Collection = connect()(_Collection)
export { Collection }
