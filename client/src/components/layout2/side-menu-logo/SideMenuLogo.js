import React from 'react'
import '../layout.css'

const SideMenuLogo = ({logo}) => {
    return <div className="logo-wrapper">
                <img src={logo} alt="Logo" />
            </div>
}

export default SideMenuLogo;