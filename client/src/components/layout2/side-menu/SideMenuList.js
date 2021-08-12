import React from 'react'
import SideMenuItem from '../side-menu-item/SideMenuItem'
import '../layout.css'

const SideMenuList = ({listItems}) => {
    return <ul className="menu-list">
        {listItems.map(item => <SideMenuItem item={item} />)}
    {/* <li className="menu-item active">
        <i className="fas fa-credit-card"></i> <a href="javascript:;">Wallet</a>
    </li>
    <li className="menu-item">
        <i className="fas fa-retweet"></i> <a href="javascript:;"> P2P</a>
    </li>
    <li className="menu-item">
        <i className="fa fa-sitemap"></i> <a href="javascript:;">Transactions</a>
    </li>
    <li className="menu-item">
        <i className="fa fa-rocket"></i> <a href="javascript:;">Trade Now</a>
    </li>
    <li className="menu-item">
        <i className="fa fa-list"></i> <a href="javascript:;"> Rates</a>
    </li>
    <li className="menu-item">
        <WechatOutlined /> <a href="javascript:;"> Chat</a>
    </li>
    <li className="menu-item">
        <i className="fa fa-cog"></i> <a href="javascript:;"> Settings</a>
    </li>
    <li className="menu-item">
        <i className="fa fa-power-off"></i> <a href="javascript:;" id='nav-toggle'>Logout</a>
    </li> */}

</ul>
}

export default SideMenuList;
