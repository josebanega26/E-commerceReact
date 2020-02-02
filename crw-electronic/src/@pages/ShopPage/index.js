import React, { useState, useEffect } from 'react'
import { ColletionPreview } from '../../@components'
import { connect } from 'react-redux'
import { shopCollectionSelector } from '../../@redux/selects/shop.select'
const _ShopPage = ({ collection }) => {
    const [shopData, setShopData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setShopData(collection)
        }, 1000)
    }, [collection])
    return (
        <div>
            {shopData.map((items, id) => (<ColletionPreview key={id} {...items} />))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    collection: shopCollectionSelector(state)
})


const ShopPage = connect(mapStateToProps)(_ShopPage)
export { ShopPage }
