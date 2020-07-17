import React from "react";
import { Form, Input, Button, Checkbox, Typography,notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const {Title} = Typography;

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description:
      desc,
  });
};

const Login = (props) => {
  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    const {username, password} = values;
    if(username==='admin' && password==='password') {
      return props.history.push('/admin')
      // return window.location.replace('/admin');
    } else if (username==='user' && password==='password') {
      return props.history.push('/user')
      // return window.location.replace('/user');
    }  
    else {
      openNotificationWithIcon('error', 'Invalid Credentials', 'Please check your email and password.');
    }
  };

  return (
    <div className="login-form" style={{margin: '21vh 20vw'}}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Title>Login</Title>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/test">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          &nbsp; Or <a href="/test">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
