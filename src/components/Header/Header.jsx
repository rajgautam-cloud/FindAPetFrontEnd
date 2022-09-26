import React from "react";
import adoptIcon from "../../assests/adopt.png";
import helpIcon from "../../assests/help.jpeg";
import logo from "../../assests/logo.svg";
import {
  AppstoreAddOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import MediaQuery from "react-responsive";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      {" "}
      <MediaQuery minWidth={780}>
        <div className={styles.header + " row"}>
          <div className=" col-xl-6 col-md-6 col-4 py-2">
            <div className="col-10">
              <img src={logo} style={{ height: "50px", width: "" }} />
            </div>
            <div className="col-2"></div>
          </div>

          <div className="col-xl-6 col-md-6 col-4 py-2 row">
            <div className="col-4"></div>
            <div className="col-1 mx-1  my-2">
              <SearchOutlined style={{ fontSize: "20px", fontWeight: "700" }} />
            </div>
            <div className="col-1 mx-1">
              <img src={helpIcon} width="40" height="40" />
            </div>
            <div className="col-1 mx-1">
              <img src={adoptIcon} width="30" height="30" />
            </div>
            <div className="col-1 mx-1">
              <Link to="/user-profile">
                <UserOutlined style={{ fontSize: "24px" }} />
              </Link>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={780}>
        <div className={styles.header + " row py-2 px-1"}>
          <div className="col-3" style={{ fontSize: "18px" }}>
            <img src={logo} style={{ height: "40px" }} />
          </div>
          <div className="col-5"></div>
          <div className="col-2">
            <Link to="/new-post">
              <AppstoreAddOutlined
                style={{ fontSize: "20px", marginTop: "5px" }}
              />
            </Link>
          </div>
          <div className="col-2">
            <Link to="/user-profile">
              <UserOutlined style={{ fontSize: "20px", marginTop: "5px" }} />
            </Link>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};
