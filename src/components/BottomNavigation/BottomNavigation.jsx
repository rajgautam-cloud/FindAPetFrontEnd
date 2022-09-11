import React from "react";
import adoptIcon from "../../assests/adopt.png";
import helpIcon from "../../assests/help.jpeg";
import { UserOutlined } from "@ant-design/icons";
import styles from "./BottomNavigation.module.css";
const BottomNavigation = () => {
  return (
    <div className={styles.bottomBar + " row py-2 mx-0"}>
      <div className="col-4">
        <img src={adoptIcon} width="30" height="30" />
      </div>
      <div className="col-4">
        <img src={helpIcon} width="40" height="40" />
      </div>
      <div className="col-4">
        <UserOutlined style={{ fontSize: "24px" }} />
      </div>
    </div>
  );
};

export default BottomNavigation;
