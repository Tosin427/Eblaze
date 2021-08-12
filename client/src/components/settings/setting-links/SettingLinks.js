import React from 'react'
import './SettingLinks.css'

const SettingLinks = ({children, hideOnMobile, ...rest}) => {
    return <div {...rest} className={`setting-links ${hideOnMobile ? 'hide-on-mobile' : ''}`}>
        {children}
    </div>
}

export default SettingLinks;