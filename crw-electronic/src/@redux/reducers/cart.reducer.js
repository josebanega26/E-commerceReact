import { CHANGE_DROPDOWN } from '../type'
const initialState = {
    dropdownState: false
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_DROPDOWN:
            return {
                ...state,
                dropdownState: !state.dropdownState
            }

        default:
            return state
    }
}
