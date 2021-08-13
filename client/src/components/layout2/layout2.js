import React, { useState } from "react";
import "./layout.css";
import logo from "../../img/logo.png";
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
import { Link } from "react-router-dom";

// import SideMenu from './side-menu/SideMenu';
import SideMenuLogo from "./side-menu-logo/SideMenuLogo";
import SideMenuList from "./side-menu/SideMenuList";
import SideMenuItem from "./side-menu-item/SideMenuItem";

const initial_state = {
  navCollapsed: false,
  activeMenu: 0,
};

const menu_links = [
  {
    text: "Overview",
    icon: <PartitionOutlined />,
    link: "/newdashboard",
  },
  {
    text: "Wallet",
    icon: <WalletOutlined />,
    link: "/wallet",
  },
  {
    text: "Transactions",
    icon: <PullRequestOutlined />,
    link: "/transactions",
  },
  {
    text: "Trade Now",
    icon: <NodeExpandOutlined />,
    link: "/trade",
  },
  {
    text: "Rates",
    icon: <AreaChartOutlined />,
    link: "/rates",
  },
  {
    text: "Settings",
    icon: <SettingOutlined />,
    link: "/settings",
  },
];

const Layout = ({ children, logout, user }) => {
  const [state, setState] = useState(initial_state);
  const [activeMenu, setActiveMenu] = useState(0);

  const toggleNavCollapse = () => {
    return setState((prevState) => ({
      ...prevState,
      navCollapsed: !prevState.navCollapsed,
    }));
  };

  const handleNavClicked = (index) => {
    setActiveMenu(index);
    return setState((prevState) => ({
      ...prevState,
      activeMenu: index,
      navCollapsed: true,
    }));
  };

  return (
    <>
      <nav className={`side-menu ${state.navCollapsed ? "collapsed" : ""}`}>
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="menu-list">
          {/* RENDER SIDE MENU */}
          {menu_links.map((menu, index) => (
            <li
              className={`menu-item ${
                state.activeMenu === index ? "active" : ""
              }`}
              key={index}
            >
              <Link onClick={() => handleNavClicked(index)} to={menu.link}>
                {menu.icon} <small>{menu.text}</small>
              </Link>
            </li>
          ))}

          <li className="menu-item">
            <a href="javascript:;" onClick={logout} id="nav-toggle">
              <LogoutOutlined /> <small>Logout</small>
            </a>
          </li>
        </ul>
        <a
          href="javascript:;"
          onClick={toggleNavCollapse}
          className="nav-toggle"
        >
          <i className="fa fa-caret-left"></i>
        </a>
      </nav>
      <header></header>
      <div
        className={`dashboard-wrapper ${state.navCollapsed ? "collapsed" : ""}`}
      >
        <div className="header">
          <span onClick={toggleNavCollapse} className="mobile-nav-toggle">
            <i className="fa fa-chevron-right"></i>
          </span>
          <span className="name-abbv">
            {user &&
              user.name &&
              user.name.split(" ")[0] &&
              user.name.split(" ")[0].slice(0, 1)}
            {user &&
              user.name &&
              user.name.split(" ")[1] &&
              user.name.split(" ")[1].slice(0, 1)}
          </span>
          <a href="">{user && user.name}</a>
        </div>
        <div className="bread-crumb">
          <i className="fa fa-user"></i> User/{user && user.email}
        </div>
        <div className="dashboard-content">{children}</div>
      </div>
    </>
  );
};

export default Layout;

//Main Layout2
