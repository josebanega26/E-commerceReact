import React from 'react'
import './style.scss'
import { CollectionItem } from '../index'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import { navigate } from '@reach/router'
import { breakpoints } from './utils.js'

const ColletionPreview = (props) => {
    const { items = [], title, routeName } = props
    const carrouselItem = items.map((item) => (<CollectionItem id={item.id} key={item.id} item={item}>
    </CollectionItem>))
    return (
        <div className="collection-preview">
            <h1 className='title' onClick={() => { navigate(`shop/${routeName}`) }}>
                {title}
            </h1>
            <Carousel
                arrows
                slidesPerPage={4}
                breakpoints={breakpoints}
                slides={
                    carrouselItem
                } />

        </div >
    )
}

export { ColletionPreview }
