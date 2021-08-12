import React from 'react';
import './SubNavToggler.css'

const SubnavToggler = ({children, onClick}) => {
    return <span className='subnav-toggler' onClick={onClick}>
        {children}
    </span>
}

export default SubnavToggler;