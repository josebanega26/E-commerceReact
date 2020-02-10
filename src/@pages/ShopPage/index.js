import React, { useEffect } from 'react'
import { CollectionsOverView } from '../../@components'
import { shopIsFetchingSelector } from '../../@redux/selects/shop.select'
import { connect } from 'react-redux'
import { Router } from "@reach/router";
import { Collection } from '../index'
import { updateCollection, fetchCollectionStartAsync } from '../../@redux/actions/shop.actions'
import { WithSpinner } from '../../@hocs'
const CollectionsOverViewSpinner = WithSpinner(CollectionsOverView)

const _ShopPage = ({ fetchCollectionStartAsync, isLoading }) => {
    useEffect(() => {
        console.log('fetchCollectionStartAsync', fetchCollectionStartAsync())
        fetchCollectionStartAsync()

    }, [fetchCollectionStartAsync])

    return (
        <div className='shop-page'>
            <Router>
                <CollectionsOverViewSpinner isLoading={isLoading} path='/'></CollectionsOverViewSpinner>
                <Collection path='/:idCollection' isLoading={isLoading} ></Collection >
            </Router>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isLoading: shopIsFetchingSelector(state)
})

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollection(collectionMap)),
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})



const ShopPage = connect(mapStateToProps, mapDispatchToProps)(_ShopPage)
export { ShopPage }
