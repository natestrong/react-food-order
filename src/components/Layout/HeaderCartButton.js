import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import {useContext, useEffect, useState} from 'react';
import CartContext from '../../store/cart-context';

function HeaderCartButton({onClick}) {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartContext = useContext(CartContext);

    let btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

    const {items} = cartContext;

    useEffect(() => {
        if (!items.length) return;
        setButtonIsHighlighted(true);
        let timer = setTimeout(() => setButtonIsHighlighted(false), 305);
        return () => clearTimeout(timer);
    }, [items]);

    return (<>
        <button className={btnClasses}
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
