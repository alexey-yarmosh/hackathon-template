import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { Form, Input, Button, Checkbox, Space } from 'antd';

import { LoginWithGithub } from './LoginWithGithub.jsx';

export const Login = () => {
  const [form] = Form.useForm();

  const submit = ({ username, password }) => {
    Meteor.loginWithPassword(username, password, error => {
      if (error) {
        console.log('error', error);
      }
    });
  };

  const register = () => {
    const username = form.getFieldValue('username');
    const password = form.getFieldValue('password');
    if (!Meteor.call('users.doesUserExists', username)) {
      Accounts.createUser({
        username: username,
        password: password,
      });
    }
  };

  return (
    <Fragment>
      <Form
        form={form}
        name="auth"
        onFinish={submit}
        onFinishFailed={console.log}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Username' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Password' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <Button onClick={register}>
              Register
            </Button>
            <LoginWithGithub />
          </Space>
        </Form.Item>
      </Form>
    </Fragment>
  );
};
