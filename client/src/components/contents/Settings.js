import React from "react";
import { Row, Divider } from "antd";

function Settings() {
  return (
    <div>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Row>
          <Divider orientation="left">Settings</Divider>
        </Row>
      </div>
    </div>
  );
}

export default Settings;
