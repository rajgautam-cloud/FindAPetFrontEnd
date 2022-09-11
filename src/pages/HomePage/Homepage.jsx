import React from "react";

import { Header } from "../../components/Header/Header";
import MediaQuery from "react-responsive";
import styles from "./Homepage.module.css";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import { Card } from "antd";
import cat1 from "../../assests/cat1.jpg";
import dog1 from "../../assests/dog1.jpg";
import rabbit1 from "../../assests/rabbit.jpg";
import Meta from "antd/lib/card/Meta";
import {
  EditOutlined,
  EllipsisOutlined,
  HeartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import avatar from "animal-avatar-generator";
const Homepage = () => {
  let av = avatar("tushar", { size: 200 });
  return (
    <div className={styles.container}>
      <Header />
      <div style={{ margin: "auto", paddingTop: "70px" }}>
        <MediaQuery maxWidth={780}>
          <Card
            hoverable
            style={{ width: "95vw" }}
            cover={<img alt="example" src={dog1} height={300} />}
            actions={[
              <HeartOutlined />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            bodyStyle={{ padding: "10px" }}
            className="mx-2"
          >
            <Meta
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  style={{ marignTop: "12px", height: "50px", width: "50px" }}
                />
              }
              title="Little Bunny"
              description="This pet is such a cutie and nice adsjgaf dfajgfbajr fcvdab gbf sadfggg abd dgfafq rgargv"
            />{" "}
          </Card>
          <Card
            hoverable
            style={{ width: "95vw" }}
            cover={<img alt="example" src={cat1} height={300} />}
            actions={[
              <HeartOutlined />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            className="mx-2 my-2"
          >
            <Meta
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  style={{ marignTop: "12px", height: "50px", width: "50px" }}
                />
              }
              title="Little Bunny"
              description="This pet is such a cutie and nicedfggg abd dgfafq rgargv"
            />{" "}
          </Card>
          <Card
            hoverable
            style={{ width: "95vw" }}
            cover={<img alt="example" src={rabbit1} height={300} />}
            actions={[
              <HeartOutlined />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            className="mx-2 my-2"
          >
            <Meta
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  style={{ marignTop: "12px", height: "50px", width: "50px" }}
                />
              }
              title="Little Bunny"
              description="This pet is such a cutie and nice adsjgaf dfajgfbajr fcvdab gbf s"
            />{" "}
          </Card>
        </MediaQuery>
        <MediaQuery minWidth={800}>hey</MediaQuery>
      </div>
      <MediaQuery maxWidth={780}>
        <BottomNavigation />
      </MediaQuery>
    </div>
  );
};

export default Homepage;
