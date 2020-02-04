import { SET_CURRENT_USER } from '../type'

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})