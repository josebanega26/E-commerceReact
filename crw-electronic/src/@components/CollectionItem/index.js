import React from 'react'
import { CustomButton } from '../index'
import './style.scss'
import { connect } from 'react-redux'
import { addItem } from '../../@redux/actions/cart.actions'

const _CollectionItem = ({ item, addItem }) => {
    const { id, name, imageUrl, price, ...otherProps } = item
    return (
        <div className='collection-item'>
            <div className="image"
                style={
                    { backgroundImage: `url(${imageUrl})` }
                }>
            </div>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>{`${price} $`} </span>
            </div>
            <CustomButton className='custom-button' inverse onClick={
                () => {
                    addItem(item)
                }
            }>
                ADD TO CART
            </CustomButton>
        </div >
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
const CollectionItem = connect(mapStateToProps, mapDispatchToProps)(_CollectionItem)
export { CollectionItem }
