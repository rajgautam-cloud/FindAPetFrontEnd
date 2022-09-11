import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import petIllustration from "../../assests/petIllustration.jpg";
import styles from "./LoginPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const LogInPage = () => {
  const [signup, setSignup] = useState(false);
  return (
    <div className={styles.container + " row"}>
      <div
        className={
          styles.leftContainer + " col-xl-6 col-md-6 col-sm-12 col-xs-12"
        }
      >
        <div className={styles.loginContainer}>
          <div className="">
            <h1 className="py-2">FindAPet</h1>

            {!signup ? (
              <>
                {" "}
                <Form
                  name="basic"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  autoComplete="off"
                  style={{ paddingLeft: "5%", paddingRight: "5%" }}
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ span: 16 }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 16 }}>
                    <Link to="/">
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ backgroundColor: "skyblue", color: "black" }}
                      >
                        Log in
                      </Button>
                    </Link>
                  </Form.Item>
                </Form>
                <div
                  style={{
                    color: "#646464",
                    paddingTop: "10vh",
                    cursor: "pointer",
                  }}
                  className="pb-2"
                >
                  Do not have an account?{" "}
                  <u
                    style={{ color: "black" }}
                    onClick={() => {
                      setSignup(true);
                    }}
                  >
                    Sign up
                  </u>
                </div>
              </>
            ) : (
              <>
                <div className="col-10">
                  <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    style={{
                      //paddingTop: "10vh",
                      paddingLeft: "5%",
                    }}
                  >
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        { required: true, message: "Please input your name!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label="Address" name="address">
                      <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                      label="Postal Code"
                      name="pincode"
                      rules={[
                        {
                          required: true,
                          message: "Please input your pincode!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      label="Confirm password"
                      name="confirmPassword"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{ span: 16 }}
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 16 }} className="py-4">
                      <Link to="/">
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{ backgroundColor: "skyblue", color: "black" }}
                        >
                          Sign up
                        </Button>
                      </Link>
                    </Form.Item>
                  </Form>
                </div>
                <div
                  style={{
                    color: "#646464",
                    paddingTop: "5vh",
                    cursor: "pointer",
                  }}
                  className="pb-2"
                >
                  Already have an account?{" "}
                  <u
                    style={{ color: "black" }}
                    onClick={() => {
                      setSignup(false);
                    }}
                  >
                    Login
                  </u>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="col-xl-6 col-md-6 .d-none .d-sm-block
"
      >
        <img src={petIllustration} className={styles.illustrationImage + ""} />
      </div>
    </div>
  );
};

export default LogInPage;
