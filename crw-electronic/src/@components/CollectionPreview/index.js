import React from 'react'
import './style.scss'
import { CollectionItem } from '../index'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';


const ColletionPreview = ({ items = [], title }) => {
    const carrouselItem = items.map(({ id, ...rest }) => (<CollectionItem key={id} {...rest}>
    </CollectionItem>))
    return (
        <div className="collection-preview">
            <h1 className='title'>
                {title}
            </h1>
            <Carousel
                arrows
                slidesPerPage={4}
                clickToChange
                slides={
                    carrouselItem
                } />

        </div >
    )
}

export { ColletionPreview }
