import { createSelector } from 'reselect'

const shopSelector = state => state.shop

export const shopCollectionSelector = createSelector(
    [shopSelector],
    ({ collection }) => {
        return Object.keys(collection).map(item => collection[item])
    }
)

export const selectCollections = collectionUrlParam => {
    return (
        createSelector(
            [shopSelector],
            ({ collection }) => {
                return collection[collectionUrlParam]
            })
    )
}