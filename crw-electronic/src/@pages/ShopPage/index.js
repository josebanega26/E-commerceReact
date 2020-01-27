import React, { useState, useEffect } from 'react'
import { SHOP_DATA as mockData } from './mockData'
import { ColletionPreview } from '../../@components'

const ShopPage = (props) => {
    const [shopData, setShopData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setShopData(mockData)
        }, 3000)
    }, [])
    return (
        <div>
            {shopData.map((items, id) => (<ColletionPreview key={id} {...items} />))}
        </div>
    )
}

export { ShopPage }
