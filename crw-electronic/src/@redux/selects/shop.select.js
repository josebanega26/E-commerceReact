import { createSelector } from 'reselect'

const shopSelector = state => state.shop

export const shopCollectionSelector = createSelector(
    [shopSelector],
    shop => shop.collection
)