import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const cartItemSelector = createSelector(
    [cartSelector],
    cart => cart.cartItems
);

export const carItemCountSelector = createSelector([cartSelector], ({ cartItems = [] }) =>
    cartItems.reduce((acc, currItem) => currItem.quantity ? acc + currItem.quantity : acc, 0)
);

export const carItemTotalPriceSelector = createSelector([cartSelector], cart =>
    cart.cartItems.reduce((acc, currItem) => acc + (currItem.quantity * currItem.price), 0)
);