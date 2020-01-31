import React from 'react'
import './style.scss'
import { CollectionItem } from '../index'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';


const ColletionPreview = ({ items = [], title }) => {
    const carrouselItem = items.map((item) => (<CollectionItem id={item.id} key={item.id} item={item}>
    </CollectionItem>))
    return (
        <div className="collection-preview">
            <h1 className='title'>
                {title}
            </h1>
            <Carousel
                arrows
                slidesPerPage={4}
                slides={
                    carrouselItem
                } />

        </div >
    )
}

export { ColletionPreview }
