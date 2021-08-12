import React from 'react'
import { Link } from 'react-router-dom'

const SideMenuItem = ({item,children}) => {
    return <li className="menu-item">
                {item.icon} 
                <Link to={item.link} >{item.text} {children} </Link>
            </li>
}

export default SideMenuItem;