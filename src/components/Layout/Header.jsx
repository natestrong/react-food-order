import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';

function Header(props) {
    return (<>
        <header className={classes.header}>
            <h1>Nate Dawg's</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage}
                 alt="A painting of Nate's restaurant"/>
        </div>
    </>);
}

export default Header;
