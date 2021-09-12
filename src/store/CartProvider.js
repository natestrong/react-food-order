import CartContext from './cart-context';
import {useReducer} from 'react';

const defaultCart = {items: []};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            const updatedItems = state.items.concat(action.item);
            return {items: updatedItems};
        }
        default: {
            return defaultCart;
        }
    }

};

export default function CartProvider({children}) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

    const cartContext = {
        items: cartState.items,
        get amount() {
            return this.items.reduce((acc, item) => {
                return acc + (item.amount * item.price);
            }, 0);
        },
        get numberOfItems() {
            return this.items.reduce((acc, item) => {
                return acc + item.amount;
            }, 0);
        },
        addItem: item => dispatchCartAction({type: 'ADD', item}),
        removeItem: id => dispatchCartAction({type: 'REMOVE', id})
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}
