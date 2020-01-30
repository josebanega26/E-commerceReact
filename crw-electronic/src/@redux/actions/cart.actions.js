import { CHANGE_DROPDOWN, ADD_ITEM } from '../type'

export const changeDropdown = (cart) => ({
    payload: cart,
    type: CHANGE_DROPDOWN
})

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})

