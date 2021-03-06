import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
// import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "./Dashboard.css";
import {
  WechatOutlined,
  DashboardOutlined,
  SettingOutlined,
  AreaChartOutlined,
  NodeExpandOutlined,
  PartitionOutlined,
  PullRequestOutlined,
  WalletOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import logo from "../../img/logo.png";
import Avatar from "react-avatar";

// import Layout2 from '../layout2/layout2';
// Contents import
import Wallet from "../contents/Wallet";
import NewDashboard from "./NewDashboard";

import Transactions from "../contents/Transactions";

import Layout2 from "../layout2/layout2";

import SideMenuList from "../layout2/side-menu/SideMenuList";

// import Chat from "../Chat";
// import Transactions from "../contents/Transactions";
import Rates from "../contents/Rates";
import Trade from "../contents/Trade";
import Settings from "../settings/Settings";

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

const sideMenuList = [
  {
    link: "/",
    icon: "fas fa-credit-card",
    text: "Wallet",
  },
  {
    link: "/",
    icon: "fas fa-retweet",
    text: "P2P",
  },
  {
    link: "/",
    icon: "fas fa-site-map",
    text: "Transactions",
  },
  {
    link: "/",
    icon: "fas fa-rocket",
    text: "Trade Now",
  },
  {
    link: "/",
    icon: "fas fa-list",
    text: "Rates",
  },
  {
    link: "/",
    icon: "fas fa-comment",
    text: "Chats",
  },
  {
    link: "/",
    icon: "fas fa-cog",
    text: "Settings",
  },
  {
    link: "/",
    icon: "fas fa-power-off",
    text: "Logout",
  },
];

const Dashboard = ({
  // getCurrentProfile,
  // deleteAccount,
  auth: { user },
  profile: { profile },
  logout,
}) => {
  // useEffect(() => {
  //   getCurrentProfile();
  // }, [getCurrentProfile]);

  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const handleCollapsed = () => {
  //   setIsCollapsed(true);
  // };

  return (
    <Router>
      <Layout2 logout={logout} user={user}>
        <Switch>
          <Route path="/trade" component={Trade} />
          <Route path="/settings" component={Settings} />
          <Route path="/transactions" component={Transactions}></Route>
          {/* <Route path="/chat" component={Chat}></Route> */}

          <Route path="/rates" component={Rates}></Route>

          <Route path="/wallet" component={Wallet} />
          <Route pathe="/newdashboard" component={NewDashboard} />
        </Switch>
      </Layout2>
    </Router>
  );

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div className="logo">
            <img style={{ width: "30%", margin: "5px" }} src={logo} alt="" />
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/newdashboard">Overview</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<WalletOutlined />}>
              <Link to="/wallet">Wallet</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PullRequestOutlined />}>
              <Link to="/transactions">Transactions</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<NodeExpandOutlined />}>
              <Link to="/transactions">tr</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<AreaChartOutlined />}>
              <Link to="/rates">Rates</Link>
            </Menu.Item>
            {/* <Menu.Item key="6" icon={<WechatOutlined />}>
              <Link to="/chat">Chat</Link>
            </Menu.Item> */}
            <Menu.Item key="6" icon={<SettingOutlined />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item onClick={logout} key="8" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <h1 style={{ textAlign: "right", paddingRight: "20px" }}>
              Hi,
              {/* <Gravatar
                email={user && user.email}
                size={30}
                style={{ borderRadius: "50%" }}
              />{" "} */}
              <Avatar name={user && user.name} size="40" round={true} />{" "}
              {user && user.name}{" "}
            </h1>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>{user && user.email}</Breadcrumb.Item>
            </Breadcrumb>

            <Switch>
              <Route path="/settings" component={Settings}></Route>
              <Route path="/transactions" component={Transactions}></Route>
              <Route path="/rates" component={Rates}></Route>
              <Route path="/wallet" component={Wallet} />
              <Route pathe="/newdashboard" component={NewDashboard} />
            </Switch>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Built ??2021 All rights Early Baze Wallet
          </Footer>
        </Layout>
      </Layout>
    </Router>
    // <Fragment>
    //   <h1 className="large text-primary">Dashboard</h1>
    //   <p className="lead">
    //     <i className="fas fa-user" /> Welcome {user && user.name}
    //   </p>
    //   {profile !== null ? (
    //     <Fragment>
    //       <DashboardActions />
    //       <Experience experience={profile.experience} />
    //       <Education education={profile.education} />

    //       <div className="my-2">
    //         <button className="btn btn-danger" onClick={() => deleteAccount()}>
    //           <i className="fas fa-user-minus" /> Delete My Account
    //         </button>
    //       </div>
    //     </Fragment>
    //   ) : (
    //     <Fragment>
    //       <p>You have not yet setup a profile, please add some info</p>
    //       <Link to="/create-profile" className="btn btn-primary my-1">
    //         Create Profile
    //       </Link>
    //     </Fragment>
    //   )}
    // </Fragment>
    // <>
    //   <Sidebar />

    // </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  logout,
})(Dashboard);
