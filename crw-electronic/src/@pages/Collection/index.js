import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { selectCollections } from '../../@redux/selects/shop.select'
import { CollectionItem } from '../../@components'
const _CollectionPages = (props) => {
    const { idCollection, collection } = props;
    console.log('props collection', collection)
    return (
        <div className='collection-page'>
            <h2>
                Collection {idCollection}
            </h2>
            <div className='items'>
                {collection.items.map(item => {
                    return <CollectionItem item={item} ></CollectionItem>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollections(ownProps.idCollection)(state)
})

const Collection = connect(mapStateToProps)(_CollectionPages)
export { Collection }
