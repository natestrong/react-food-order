import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

function Backdrop(props) {
    return <div className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>;
}

export default function Modal(props) {
    return (<>
        {ReactDOM.createPortal(<Backdrop/>)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
    </>);
}
