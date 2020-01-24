import React from 'react'
import './styles.scss'

//Home Page of the E-commerce App

const getItem = (items = []) => {
    return items.map(
        ({ title }, index) => (<div key={index} className='menu-item'>
            <div className='content'>
                <h1> {title}</h1>
                <span>SHOP NOW!</span>
            </div>
        </div>));
}
const HomePage = (props) => {
    const { items } = props;
    return (
        <div className='homepage'>
            <div class="directory-Menu">
                HomePage
                {getItem(items)}
            </div>
        </div>
    )
}

HomePage.defaultProps = {
    items: [
        { title: 'Hats' },
        { title: 'Jackets' },
        { title: 'Hoddies' },
        { title: 'Womens' },
        { title: 'Mens' },
    ]
}
export { HomePage }
