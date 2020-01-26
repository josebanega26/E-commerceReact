import React from 'react'
import './style.scss'

const ColletionPreview = ({ items = [], title }) => {
    console.log('items', items)
    return (
        <div className="colletion-preview">
            <h1>
                {title}
            </h1>
            {
                items.map(({ id, name }) => (<p key={id}>
                    {name}
                </p>
                ))
            }

        </div >
    )
}

export { ColletionPreview }
