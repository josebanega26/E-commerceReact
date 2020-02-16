import { shopActionsTypes } from '../type/index'
const initialState = {
    collection: null,
    isFetching: false,
    errorMessage: undefined,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case shopActionsTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                collection: payload,
                isFetching: false,
            }
        case shopActionsTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }

        case shopActionsTypes.FETCH_COLLECTION_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            }
        default:
            return state
    }
}
