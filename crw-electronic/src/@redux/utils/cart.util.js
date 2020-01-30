const addItemToCart = (cartItems, itemToAdd) => {
    const existItem = cartItems.find(({ id }) => {
        return id === itemToAdd.id
    })
    if (existItem) {
        return cartItems.map(item => (
            item.id === itemToAdd.id
                ?
                ({
                    ...item,
                    quantity: item.quantity + 1,

                })
                : item
        ))
    }

    return [...cartItems,
    { ...itemToAdd, "quantity": 1 }]

}



// const removeItemFromCart = (cartItems, itemToAdd) => {
//     const existItem = cartItems.find(({ id }) => {
//         return id === itemToAdd.id
//     })
//     // REMOVE ITEM 
//     return [...cartItems]
// }

export { addItemToCart }