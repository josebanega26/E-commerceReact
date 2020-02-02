import React from 'react'
import { CollectionsOverView } from '../../@components'
import { connect } from 'react-redux'
import { Router } from "@reach/router";
import { Collection } from '../index'
const _ShopPage = () => {

    return (
        <div className='shop-page'>
            <Router>
                <CollectionsOverView path='/'></CollectionsOverView>
                <Collection path='/:idCollection'></Collection>
            </Router>
        </div>
    )
}

const mapStateToProps = (state) => ({

})


const ShopPage = connect(mapStateToProps)(_ShopPage)
export { ShopPage }
