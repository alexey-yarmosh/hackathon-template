import React from 'react';
import { Row, Col } from 'antd';

import { Login } from '../components/Login.jsx';


export const Auth = () => {
  return (
    <Row justify="center">
      <Col xs={24} lg={12} className="layout-wrapper">
        <h2 className="auth__title">Todo list</h2>
        <Login />
      </Col>
    </Row>
  );
};
