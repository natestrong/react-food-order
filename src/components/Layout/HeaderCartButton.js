import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import {useContext} from 'react';
import CartContext from '../../store/cart-context';

function HeaderCartButton({onClick}) {
    const cartContext = useContext(CartContext);

    console.log(cartContext);

    return (<>
        <button className={classes.button}
                onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>

            <span>
                Your Cart
            </span>

            <span className={classes.badge}>
                {cartContext.numberOfItems}
            </span>
        </button>
    </>);
}

export default HeaderCartButton;
