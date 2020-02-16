import { UPDATE_COLLECTIONS, shopActionsTypes } from '../type'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util'

export const updateCollection = (collection) => ({
    type: UPDATE_COLLECTIONS,
    payload: collection
})

export const fetchCollectionStart = () => ({
    type: shopActionsTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionFail = (errorMsg) => ({
    type: shopActionsTypes.FETCH_COLLECTION_FAIL,
    payload: errorMsg
})
export const fetchCollectionSucess = (collection) => ({
    type: shopActionsTypes.FETCH_COLLECTION_SUCCESS,
    payload: collection
})

export const fetchCollectionStartAsync = () => {
    return async dispatch => {
        const collectionRef = firestore.collection('collection')
        dispatch(fetchCollectionStart())
        collectionRef.get().then(snapshot => {
            const collection = convertCollectionSnapshotToMap(snapshot)
            console.log('collection', collection)
            dispatch(fetchCollectionSucess(collection))
        }).catch(error => dispatch(fetchCollectionFail(error)))
    }
}
