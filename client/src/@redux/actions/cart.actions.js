import { CHANGE_DROPDOWN, ADD_ITEM, DELETE_ITEM, REMOVE_A_ITEM } from '../type'

export const changeDropdown = (cart) => ({
    payload: cart,
    type: CHANGE_DROPDOWN
})

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})

export const removeAItem = (item) => ({
    type: REMOVE_A_ITEM,
    payload: item
})

export const deleteItem = (item) => ({
    type: DELETE_ITEM,
    payload: item
})
