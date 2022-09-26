import React from "react";

import { Header } from "../../components/Header/Header";
import MediaQuery from "react-responsive";
import styles from "./Homepage.module.css";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import { Card } from "antd";
import cat1 from "../../assests/cat1.jpg";
import dog1 from "../../assests/dog1.jpg";
import rabbit1 from "../../assests/rabbit.jpg";
import loading from "../../assests/loading.gif";
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
      <div
        style={{
          paddingTop: "70px",
          alignContent: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <MediaQuery maxWidth={780}>
          <Card
            hoverable
            cover={<img alt="example" src={dog1} height={300} />}
            actions={[
              <HeartOutlined />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            bodyStyle={{ padding: "10px" }}
            className="mx-auto col-12"
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
            cover={<img alt="example" src={cat1} height={300} />}
            actions={[
              <HeartOutlined />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            className="mx-auto col-12"
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
            cover={<img alt="example" src={rabbit1} height={300} />}
            actions={[
              <HeartOutlined />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            className="mx-auto col-12"
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
        <MediaQuery minWidth={800}>
          <div className="row px-0">
            <div
              className=" col-xl-6 col-md-6 col-6 py-2 mx-0 row"
              style={{
                overflowY: "scroll",
                height: "100vh",
              }}
            >
              <div className="col-4"></div>
              <div
                className="col-8 px-0 py-0"
                style={{ backgroundColor: "white" }}
              >
                <Card
                  cover={<img alt="example" src={dog1} height={300} />}
                  actions={[
                    <HeartOutlined />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                  bodyStyle={{ padding: "10px" }}
                  className=" col-12"
                >
                  <Meta
                    avatar={
                      <Avatar
                        src="https://joeschmoe.io/api/v1/random"
                        style={{
                          marignTop: "12px",
                          height: "50px",
                          width: "50px",
                        }}
                      />
                    }
                    title="Little Bunny"
                    description="This pet is such a cutie and nice adsjgaf dfajgfbajr fcvdab gbf sadfggg abd dgfafq rgargv"
                  />{" "}
                </Card>
                <Card
                  cover={<img alt="example" src={cat1} height={300} />}
                  actions={[
                    <HeartOutlined />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                  className="mx-auto col-12 my-2"
                >
                  <Meta
                    avatar={
                      <Avatar
                        src="https://joeschmoe.io/api/v1/random"
                        style={{
                          marignTop: "12px",
                          height: "50px",
                          width: "50px",
                        }}
                      />
                    }
                    title="Little Bunny"
                    description="This pet is such a cutie and nicedfggg abd dgfafq rgargv"
                  />{" "}
                </Card>
                <Card
                  cover={<img alt="example" src={rabbit1} height={300} />}
                  actions={[
                    <HeartOutlined />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                  className="mx-auto col-12 my-2"
                >
                  <Meta
                    avatar={
                      <Avatar
                        src="https://joeschmoe.io/api/v1/random"
                        style={{
                          marignTop: "12px",
                          height: "50px",
                          width: "50px",
                        }}
                      />
                    }
                    title="Little Bunny"
                    description="This pet is such a cutie and nice adsjgaf dfajgfbajr fcvdab gbf s"
                  />{" "}
                </Card>
                <Card
                  cover={<img alt="example" src={dog1} height={300} />}
                  actions={[
                    <HeartOutlined />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                  bodyStyle={{ padding: "10px" }}
                  className=" col-12"
                >
                  <Meta
                    avatar={
                      <Avatar
                        src="https://joeschmoe.io/api/v1/random"
                        style={{
                          marignTop: "12px",
                          height: "50px",
                          width: "50px",
                        }}
                      />
                    }
                    title="Little Bunny"
                    description="This pet is such a cutie and nice adsjgaf dfajgfbajr fcvdab gbf sadfggg abd dgfafq rgargv"
                  />{" "}
                </Card>
              </div>
            </div>

            <div
              className="col-6 py-2 row"
              style={{ overflowY: "hidden", textAlign: "left" }}
            >
              <div
                className="col-6 py-2"
                style={{ backgroundColor: "#ffffff", height: "fit-content" }}
              >
                <Card style={{ width: "100%", marginTop: 16, border: "none" }}>
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="tushar_gupta1109"
                    description="#doglover #labradog #coder"
                    style={{ padding: "0px" }}
                  />
                </Card>
                <hr></hr>
                <span
                  className="px-3 py-2"
                  style={{ color: "#646464", fontWeight: "600" }}
                >
                  Animals that need your help
                </span>
                <Card
                  style={{
                    width: "100%",
                    marginTop: 16,
                    border: "none",
                    padding: "0px",
                  }}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Veronica"
                    description="A cat having no home"
                  />
                </Card>
                <Card
                  style={{
                    width: "100%",
                    marginTop: 16,
                    border: "none",
                    padding: "0px",
                  }}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Tommy"
                  />
                </Card>
                <Card style={{ width: "100%", marginTop: 16, border: "none" }}>
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Wusho"
                  />
                </Card>
                <Card style={{ width: "100%", marginTop: 16, border: "none" }}>
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Tom card"
                  />
                </Card>
              </div>
              <div className="col-1 mx-1  my-2"></div>
              <div className="col-1 mx-1"> </div>
              <div className="col-1 mx-1"> </div>
              <div className="col-1 mx-1"></div>
              <div></div>
            </div>
          </div>
        </MediaQuery>
      </div>
      <MediaQuery maxWidth={780}>
        <BottomNavigation />
      </MediaQuery>
    </div>
  );
};

export default Homepage;
