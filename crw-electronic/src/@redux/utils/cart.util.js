const addItemToCart = (cartItems, itemToAdd) => {
    const existItem = cartItems.find(({ id }) => {
        return id === itemToAdd.id;
    });
    if (existItem) {
        return cartItems.map(item =>
            item.id === itemToAdd.id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                : item
        );
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const deleteItemFromCart = (cartItems, itemToDelete) => {
    const existItem = cartItems.find(({ id }) => {
        return id === itemToDelete.id;
    });
    if (existItem) {
        return cartItems.filter(item => item.id !== itemToDelete.id);
    }
    // REMOVE ITEM
    return [...cartItems];
};
const removeItemFromCart = (cartItems, itemToRemove) => {
    const existItem = cartItems.find(({ id }) => {
        return id === itemToRemove.id;
    });
    if (existItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }
    else {
        return cartItems.map(item =>
            item.id === itemToRemove.id
                ? {
                    ...item,
                    quantity: item.quantity - 1
                }
                : item
        );
    }
};
export { addItemToCart, deleteItemFromCart, removeItemFromCart };
