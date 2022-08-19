
function Button(props) {
    function getStyles(props) {
        let { type = "primary", size = "medium" } = props;
        return `button button-${type} button-${size}`;
    }
    return (
        <button
            className={getStyles(props)}
            disabled={props.disabled}
            onClick={props.onClickHandler}
        >
            {props.label}
        </button>
    );
}

export default Button;