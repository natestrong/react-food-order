import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

function Backdrop({onClose}) {
    return <div className={classes.backdrop}
                onClick={onClose}/>;
}

function ModalOverlay(props) {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>;
}

const portalElemenet = document.getElementById('overlays');

export default function Modal({onClose, children}) {
    return (<>
        {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalElemenet)}
        {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElemenet)}
    </>);
}
