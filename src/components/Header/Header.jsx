import React from "react";
import adoptIcon from "../../assests/adopt.png";
import helpIcon from "../../assests/help.jpeg";
import { UserOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <div className={styles.header + " row"}>
      <div className=" col-xl-5 col-md-5 col-4 py-2">
        <span style={{ fontSize: "25px" }}>FindAPet</span>
      </div>
      <div className=" col-xl-4 col-md-4 col-6 py-2 ">
        <Search
          placeholder="Search here..."
          //onSearch={onSearch}
          className="col-xl-4 col-md-4 col-6 py-2"
        />
      </div>
      <div className="col-3 py-2 row">
        <div className="col-4"></div>
        <div className="col-2 mx-1">
          <img src={helpIcon} width="40" height="40" />
        </div>
        <div className="col-2 mx-1">
          <img src={adoptIcon} width="30" height="30" />
        </div>
        <div className="col-2 mx-1">
          <UserOutlined style={{ fontSize: "24px" }} />
        </div>
        <div></div>
      </div>
    </div>
  );
};
