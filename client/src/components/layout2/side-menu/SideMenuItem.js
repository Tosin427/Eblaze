import React from 'react'
import '../layout.css'
import { Link } from 'react-router-dom'

const SideMenuItem = ({icon, link, text, active, onClick, ...rest}) => {
    return <li  {...rest} onClick={onClick} className={`menu-item ${active ? 'active' : ''}`}>
                <i className={icon}></i> <Link to={link} id='nav-toggle'>{text}</Link>
            </li>
}

export default SideMenuItem;