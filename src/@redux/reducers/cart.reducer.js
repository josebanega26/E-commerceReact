import { CHANGE_DROPDOWN, ADD_ITEM, DELETE_ITEM, REMOVE_A_ITEM } from '../type'
import { addItemToCart, deleteItemFromCart, removeItemFromCart } from '../utils/cart.util'
const initialState = {
    dropdownState: false,
    cartItems: [],
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_DROPDOWN:
            return {
                ...state,
                dropdownState: !state.dropdownState
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload),
            }
        case REMOVE_A_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload),
            }
        case DELETE_ITEM:
            return {
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, payload),
            }
        default:
            return state
    }
}

