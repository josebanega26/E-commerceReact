import { UPDATE_COLLECTIONS } from '../type'

export const updateCollection = (collection) => ({
    type: UPDATE_COLLECTIONS,
    payload: collection
})