import React from 'react'
import './input.css'

const Label = ({label, style, ...rest}) => {
    return <label {...rest}>{label}</label>
}

export default Label;