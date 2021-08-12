import React from 'react'
import './Button.css'


const Button = ({children, text, type, variant, ...rest}) => {
    return <button type={type} {...rest} className={variant}>{text} { children}</button>
}

export default Button;