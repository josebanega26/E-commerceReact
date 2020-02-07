import { UPDATE_COLLECTIONS } from '../type/index'
const initialState = {
    collection: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collection: payload
            }

        default:
            return state
    }
}
