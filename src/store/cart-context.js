import React from 'react';

const CartContext = React.createContext({
    items: [],
    get total() {
        return 0;
    },
    get numberOfItems() {
        return 0;
    },
    removeItem: (id) => {
    },
    addItem: (item) => {
    }
});

export default CartContext;
