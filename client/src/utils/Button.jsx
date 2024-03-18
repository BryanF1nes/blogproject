const Button = ({ name, classes, handler }) => {
    return (
        <button onClick={ handler } className={ classes }>{ name }</button>
    )
}

export default Button;