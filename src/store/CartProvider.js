import CartContext from './cart-context';

export default function CartProvider({children}) {
    const cartContext = {
        items: [],
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
        addItem: item => {
        },
        removeItem: id => {
        }
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}
