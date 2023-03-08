import './button.styles.scss';
const Button =({children, style_type,...otherProps}) =>{
    const button_types={
        google:"google-sign-in",
        inverted :"inverted"

    }
    return(
        <button className={`button-container ${button_types[ style_type]}`} {...otherProps} >{children}</button>
    )
}
export default Button;