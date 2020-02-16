import { createSelector } from 'reselect'

const userSelect = state => state.user;

export const currentUserSelect = createSelector(
    [userSelect],
    user => user.currentUser
)