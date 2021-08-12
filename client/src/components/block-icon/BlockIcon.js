import React from 'react';
import './BlockIcon.css';

const BlockIcon = ({icon, onClick}) => {
    return <span className='block-icon'><i className={icon}></i></span>;
}

export default BlockIcon;