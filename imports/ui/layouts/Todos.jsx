import React from 'react';
import { Row, Col } from 'antd';

import { Todos as TodosComponent } from '../components/Todos.jsx';


export const Todos = () => {
  return (
    <Row justify="center">
      <Col xs={24} lg={16} >
        <h2>Todo list</h2>
        <TodosComponent />
      </Col>
    </Row>
  );
};
