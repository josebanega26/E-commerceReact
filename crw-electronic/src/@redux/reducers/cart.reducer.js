import { CHANGE_DROPDOWN, ADD_ITEM, } from '../type'
import { addItemToCart } from '../utils/cart.util'
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
        default:
            return state
    }
}
