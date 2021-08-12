import React from 'react'
import './input.css'
const Input = ({icon, value, type, name, onChange, placeholder, onIconClick}) => {
    return <div className="input-group">
            <input 
            type={type ? type : 'text'}
            name={name}
            value={value}
            onChange={onChange}  
            placeholder={placeholder}/>
            {icon ? <i 
            onClick={onIconClick ? onIconClick : () => null}
            className={icon}></i> : null}
        </div>
}

export default Input;