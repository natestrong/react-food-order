import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

function Header({onShowCart}) {
    return (<>
        <header className={classes.header}>
            <h1>Nate Dawg's</h1>
            <HeaderCartButton onClick={onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage}
                 alt="A painting of Nate's restaurant"/>
        </div>
    </>);
}

export default Header;
