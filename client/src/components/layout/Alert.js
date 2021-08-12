import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from './Alert.module.css'

const Alert = ({ alerts }) =>
  alerts.map((alert) => (
    <div key={alert.id} className={[styles.alert, alert.alertType].join(' ')}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
