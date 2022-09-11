import React from "react";
import adoptIcon from "../../assests/adopt.png";
import helpIcon from "../../assests/help.jpeg";
import logo from "../../assests/logo.svg";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import MediaQuery from "react-responsive";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <>
      {" "}
      <MediaQuery minWidth={780}>
        <div className={styles.header + " row"}>
          <div className=" col-xl-5 col-md-5 col-4 py-2">
            <img src={logo} style={{ height: "50px", width: "1000px" }} />
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
      </MediaQuery>
      <MediaQuery maxWidth={780}>
        <div className={styles.header + " row py-2 px-1"}>
          <div className="col-3" style={{ fontSize: "18px" }}>
            <img src={logo} style={{ height: "40px" }} />
          </div>
          <div className="col-6"></div>
          <div className="col-3">
            <UserOutlined style={{ fontSize: "20px", marginTop: "5px" }} />
          </div>
        </div>
      </MediaQuery>
    </>
  );
};
