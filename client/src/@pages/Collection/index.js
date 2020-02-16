import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { selectCollections } from '../../@redux/selects/shop.select'
import { CollectionItem } from '../../@components'
import { WithSpinner } from '../../@hocs'
const _CollectionPages = (props) => {
    const { idCollection, collection } = props;
    return (
        <div className='collection-page'>
            <h2>
                Collection {idCollection}
            </h2>
            <div className='items'>
                {collection.items.map((item, id) => {
                    return <CollectionItem key={id} item={item} ></CollectionItem>
                })}
            </div>
        </div>
    )
}
const CollectionPagesWithSpinner = WithSpinner(_CollectionPages)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollections(ownProps.idCollection)(state)
})

const Collection = connect(mapStateToProps)(CollectionPagesWithSpinner)
export { Collection }
