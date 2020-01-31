import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import {
    addItem,
    deleteItem,
    removeAItem
} from "../../@redux/actions/cart.actions";

const _CheckoutItem = ({ item, addItem, deleteItem, removeAItem }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span
                    className="left-arrow"
                    role="img"
                    aria-labelledby="left-arrow"
                    onClick={() => {
                        removeAItem(item);
                    }}
                >
                    &#10094;
        </span>
                {quantity}
                <span
                    className="right-arrow"
                    role="img"
                    aria-labelledby="right-arrow"
                    onClick={() => {
                        addItem(item);
                    }}
                >
                    &#10095;
        </span>
            </span>
            <span className="price">{price}</span>
            <span
                className="remove-button"
                role="img"
                aria-labelledby="delete"
                onClick={() => {
                    console.log("hey");
                    deleteItem(item);
                }}
            >
                {" "}
                &#10060;
      </span>
        </div>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    deleteItem: item => dispatch(deleteItem(item)),
    removeAItem: item => dispatch(removeAItem(item))
});
const CheckoutItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(_CheckoutItem);
export { CheckoutItem };
