import React from 'react'
import './Switch.css'

const Switch = ({active}) => {
    return <span className={`switch ${active ? 'active' : ''}`}>
        <span className='switch-toggler'></span>
    </span>
}

export default Switch;