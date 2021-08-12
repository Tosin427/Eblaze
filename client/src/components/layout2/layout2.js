import React, { useState } from 'react'
import './layout.css'
import logo from '../../img/logo.png'
import {
    WechatOutlined,
    SettingOutlined,
    AreaChartOutlined,
    NodeExpandOutlined,
    PartitionOutlined,
    PullRequestOutlined,
    WalletOutlined,
    LogoutOutlined,
  } from "@ant-design/icons";
import { Link } from 'react-router-dom';

// import SideMenu from './side-menu/SideMenu';
import SideMenuLogo from './side-menu-logo/SideMenuLogo';
import SideMenuList from './side-menu/SideMenuList';
import SideMenuItem from './side-menu-item/SideMenuItem';

const initial_state = {
    navCollapsed: false,
    activeMenu: null,
}


const Layout = ({children, logout, user}) => {
    const [state, setState] = useState(initial_state)


    const toggleNavCollapse = () => {
        return setState(prevState => ({
            ...prevState,
            navCollapsed: !prevState.navCollapsed
        }))
    }

    return <>
        <nav className={`side-menu ${state.navCollapsed ? 'collapsed' : ''}`}>
        <div className="logo-wrapper">
            <img src={logo} alt="Logo" />
        </div>
        
        <ul className="menu-list">
            <li className="menu-item active">
                <WalletOutlined /> <Link to="/wallet">Wallet</Link>
            </li>
            <li className="menu-item">
                <PartitionOutlined /> <Link to="/"> P2P</Link>
            </li>
            <li className="menu-item">
                <PullRequestOutlined /> <Link to="/transactions">Transactions</Link>
            </li>
            <li className="menu-item">
                <NodeExpandOutlined /> <Link to="/">Trade Now</Link>
            </li>
            <li className="menu-item">
                <AreaChartOutlined /> <Link to="/rates"> Rates</Link>
            </li>
            {/* <li className="menu-item">
                <WechatOutlined /> <Link to="/chat"> Chat</Link>
            </li> */}
            <li className="menu-item">
                <SettingOutlined /> <Link to="/settings"> Settings</Link>
            </li>
            <li className="menu-item">

                <LogoutOutlined /> <a href="javascript:;" onClick={logout} id='nav-toggle'>Logout</a>

            </li>

        </ul>
        <a href="javascript:;" onClick={toggleNavCollapse} className="nav-toggle"><i className="fa fa-caret-left"></i></a>
    </nav>
    <header>
    </header>
    <div className={`dashboard-wrapper ${state.navCollapsed ? 'collapsed' : ''}`}>
        <div className="header">
            <span  onClick={toggleNavCollapse}  className='mobile-nav-toggle'>
                <i className='fa fa-chevron-right'></i>
            </span>
            <span className="name-abbv">
                {user && user.name && user.name.split(' ')[0] && user.name.split(' ')[0].slice(0,1) }
                {user && user.name && user.name.split(' ')[1] && user.name.split(' ')[1].slice(0,1) }
            </span>
            <a href="">{user && user.name}</a>

        </div>
        <div className="bread-crumb">
            <i className="fa fa-user"></i> User/{user && user.email}
        </div>
        <div className="dashboard-content">
            {children}
        </div>
    </div>
    </>
}

export default Layout;