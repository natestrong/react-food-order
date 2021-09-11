import classes from './Input.module.css';

export default function Input({input, label}) {
    return <div className={classes.input}>
        <label htmlFor={input.id}>{label}</label>
        <input id={input.id} {...input}/>
    </div>;
}
