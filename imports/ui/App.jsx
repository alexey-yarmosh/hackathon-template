import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';

import { Auth } from './layouts/Auth';
import { Todos } from './layouts/Todos.jsx';
import { Logout } from './components/Logout.jsx';

const { Header, Content, Footer } = Layout;

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <Layout>
      <Header>
        <Row justify="center">
          <Col xs={24} lg={12}>
            <Row justify="space-between">
              <div className="logo">Application</div>
              {user && <Logout />}
            </Row>
          </Col>
        </Row>
      </Header>
      <Row justify="center">
        <Col xs={24} lg={12}>
          <Content className="content">
            {!user && <Auth />}
            {user && <Todos />}
          </Content>
        </Col>
      </Row>
    </Layout>
  )
};
