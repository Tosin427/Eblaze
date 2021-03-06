import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Settings.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SettingLinks from "./setting-links/SettingLinks";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import DashboardActions from "./dboard/DashboardActions";
import Experience from "./dboard/Experience";
import Education from "./dboard/Education";
import SideMenuItem from "../layout2/side-menu/SideMenuItem";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import ProfileSetting from "./profile-setting/ProfileSetting";
import Referral from "./referral/Referral";
import Notification from "./notification/Notification";
import BankAccount from "./bank-account/BankAccount";
import ChangePassword from "./change-password/ChangePassword";
import SubnavToggler from "../layout2/subnav-toggler/SubnavToggler";

const menu_links = [
  {
    link: "/profile",
    text: "Profile",
  },
  {
    link: "/referral",
    text: "Referral",
  },
  {
    link: "/notification",
    text: "Notifications",
  },
  {
    link: "/bank-accounts",
    text: "Bank Accounts",
  },
  // {
  //     link: '/password',
  //     text: 'Password'
  // },
];

const security_links = [
  {
    link: "/password",
    text: "Password",
  },
  // {
  //     link: '/transaction-pin',
  //     text: 'Transaction Pin'
  // },
];

const Settings = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [activeMenu, changeActiveMenu] = useState(0);
  const [showMobileSettings, setShowMobileSettings] = useState(true);

  const match = useRouteMatch().path;
  const handleMenuClick = (index) => {
    console.log("Menu CLicked");

    changeActiveMenu(index);
    setShowMobileSettings(true);
  };

  return (
    <div className="settings">
      <SubnavToggler onClick={() => setShowMobileSettings(!showMobileSettings)}>
        <i className="fa fa-bars"></i>
      </SubnavToggler>

      <SettingLinks hideOnMobile={showMobileSettings}>
        <h4>
          <i className="fa fa-cog"></i>Profile
        </h4>
        {menu_links.map((link, index) => (
          <SideMenuItem
            active={activeMenu === index}
            key={index}
            onClick={() => handleMenuClick(index)}
            link={`${match}${link.link}`}
            text={link.text}
          />
        ))}

        <h4>
          <i className="fa fa-lock"></i>Security
        </h4>
        {security_links.map((link, index) => (
          <SideMenuItem
            key={index}
            link={`${match}${link.link}`}
            onClick={() => handleMenuClick(index)}
            text={link.text}
          />
        ))}
      </SettingLinks>

      {/* <SettingLinks hideOnMobile={!showMobileSettings} style={{backgroundColor: '#fff'}}> */}
      <div
        className={`setting-content ${
          !showMobileSettings ? "hide-on-mobile" : ""
        }`}
      >
        <Switch>
          <Route path={`${match}/profile`}>
            <ProfileSetting user={user} />
          </Route>

          <Route path={`${match}/profile`} component={ProfileSetting} />

          <Route path={`${match}/referral`} component={Referral} />
          <Route path={`${match}/notification`} component={Notification} />
          <Route path={`${match}/bank-accounts`} component={BankAccount} />
          <Route path={`${match}/password`} component={ChangePassword} />
          <Route path={`${match}`}>
            <Redirect to={`${match}/profile`} />
          </Route>
        </Switch>
      </div>
      {/* </SettingLinks> */}
    </div>
  );
};

Settings.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Settings
);
