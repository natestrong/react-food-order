import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import {useContext} from 'react';
import CartItem from './CartItem';

export default function Cart({onClose}) {
    const cartContext = useContext(CartContext);

    console.log(cartContext.items);

    const cartItems = <ul className={classes['cart-items']}>
        {cartContext.items.map(item => (
            <CartItem key={item.id}
                      name={item.name}
                      amount={item.amount}
                      price={item.price}
                      onRemove={cartContext.removeItem.bind(null, item.id)}
                      onAdd={cartContext.addItem.bind(null, {...item, amount: 1})}/>
        ))}
    </ul>;

    return <Modal onClose={onClose}>
        {cartItems}

        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartContext.amountUSD}</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--alt']}
                    onClick={onClose}>
                Close
            </button>
            <button disabled={cartContext.items.length === 0}
                    className={classes.button}>Order
            </button>
        </div>
    </Modal>;
}
