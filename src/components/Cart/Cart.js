import classes from './Cart.module.css';
import Modal from '../UI/Modal';

export default function Cart({onClose}) {
    const cartItems = <ul className={classes['cart-items']}>
        {[
            {id: 'c1', name: 'Sushi', amount: 2, price: 12.99},
            {id: 'c2', name: 'Pizza', amount: 1, price: 15.99},
        ].map(item => <li>{item.name}</li>)}
    </ul>;

    return <Modal onClose={onClose}>
        {cartItems}

        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--alt']}
                    onClick={onClose}>
                Close
            </button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>;
}
