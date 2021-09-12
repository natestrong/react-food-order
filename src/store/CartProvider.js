import CartContext from './cart-context';
import {useReducer} from 'react';

const defaultCart = {items: []};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            const index = state.items.findIndex(item => item.id === action.item.id);
            let updatedItems = [...state.items];
            if (index > -1) {
                updatedItems[index].amount++;
            } else {
                updatedItems.push(action.item);
            }
            return {items: updatedItems};
        }
        case 'REMOVE': {
            const index = state.items.findIndex(item => item.id === action.id);
            let updatedItems = [...state.items];
            if (updatedItems[index].amount <= 1) {
                updatedItems.splice(index, 1);
            } else {
                updatedItems[index].amount--;
            }
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
        get amountUSD() {
            return new Intl.NumberFormat(
                'en-US',
                {style: 'currency', currency: 'USD'}
            ).format(this.amount);
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
