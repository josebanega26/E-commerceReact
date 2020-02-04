import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { ColletionPreview } from '../../@components'
import { shopCollectionSelector } from '../../@redux/selects/shop.select'

const _CollectionsOverView = ({ collection }) => {
    return (
        <div>
            {collection.map((items, id) => (<ColletionPreview key={id} {...items} />))}
        </div>
    )
}
const mapStateToProps = (state) => ({
    collection: shopCollectionSelector(state)
})

const CollectionsOverView = connect(mapStateToProps)(_CollectionsOverView)
export { CollectionsOverView }
