import { createSelector } from 'reselect'

const shopSelector = state => state.shop

export const shopIsFetchingSelector = createSelector(
    [shopSelector],
    ({ isFetching }) => {
        return isFetching
    }
)
export const shopCollectionSelector = createSelector(
    [shopSelector],
    ({ collection }) => {
        return collection ? Object.keys(collection).map(item => collection[item]) : []
    }
)

export const selectCollections = collectionUrlParam => {
    return (
        createSelector(
            [shopSelector],
            ({ collection }) => {
                return collection ? collection[collectionUrlParam] : null
            })
    )
}