import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {useState} from 'react';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCart = () => setCartIsShown(true);
    const hideCart = () => setCartIsShown(false);


    return (<>
        {cartIsShown && <Cart onClose={hideCart}/>}
        <Header onShowCart={showCart}/>
        <main>
            <Meals/>
        </main>
    </>);
}

export default App;
