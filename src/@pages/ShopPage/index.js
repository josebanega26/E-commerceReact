import React, { useState, useEffect } from 'react'
import { CollectionsOverView } from '../../@components'
import { connect } from 'react-redux'
import { Router } from "@reach/router";
import { Collection } from '../index'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util'
import { updateCollection } from '../../@redux/actions/shop.actions'
import { WithSpinner } from '../../@hocs'
const CollectionsOverViewSpinner = WithSpinner(CollectionsOverView)

const _ShopPage = ({ updateCollections }) => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        try {
            const collectionRef = firestore.collection('collection')
            // must be a async function
            collectionRef.onSnapshot(async snapShot => {
                const collection = convertCollectionSnapshotToMap(snapShot)
                updateCollections(collection)
                setLoading(false)
                return collection
            })
        }
        catch (error) {
            console.error(error)
        }
        return () => {

        }
    }, [updateCollections])

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

})

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollection(collectionMap))
})



const ShopPage = connect(mapStateToProps, mapDispatchToProps)(_ShopPage)
export { ShopPage }
