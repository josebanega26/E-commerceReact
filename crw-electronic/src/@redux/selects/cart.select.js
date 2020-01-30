import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const cartItemSelector = createSelector(
    [cartSelector],
    cart => cart.cartItems
);

export const carItemCountSelector = createSelector([cartSelector], cart =>
    cart.cartItems.reduce((acc, currItem) => acc + currItem.quantity, 0)
);

export const carItemTotalPriceSelector = createSelector([cartSelector], cart =>
    cart.cartItems.reduce((acc, currItem) => acc + (currItem.quantity * currItem.price), 0)
);