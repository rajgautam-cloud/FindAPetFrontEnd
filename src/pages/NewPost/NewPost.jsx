import {
  Button,
  DatePicker,
  Form,
  Input,
  PageHeader,
  Radio,
  InputNumber,
  Switch,
} from "antd";
import logo from "../../assests/logo.svg";
import React, { useState } from "react";
import { Upload } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./NewPost.module.css";

const NewPost = () => {
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div className={styles.mainContainer}>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate("/")}
        subTitle="Add new post"
        extra={[<img src={logo} style={{ width: "150px" }} />]}
      />
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        style={{ height: "200px", width: "100%" }}
      >
        {fileList.length < 1 && "Upload Photo"}
      </Upload>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ textAlign: "left" }}
      >
        <Form.Item label="Animal">
          <Radio.Group>
            <Radio value="dog"> Dog </Radio>
            <Radio value="cat"> Cat </Radio>
            <Radio value="rabbit"> Rabbit </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Postal code">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Address">
          <Input.TextArea style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Donate pet"
          valuePropName="checked"
          wrapperCol={{ span: 18 }}
        >
          <Switch />
        </Form.Item>
        <Form.Item className="text-center">
          <Button>Add new post</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewPost;
