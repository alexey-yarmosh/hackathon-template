import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Input, List } from 'antd';

import { TodosCollection } from '/imports/db/todos';

const { Search } = Input;

export const Todos = () => {
  const user = useTracker(() => Meteor.user());

  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text) return;
    Meteor.call('todos.insert', text);
    setText('');
  };

  const deleteTask = (_id) => Meteor.call('todos.remove', _id);

  const { todos, isLoading } = useTracker(() => {
    if (!user) {
      return [];
    }
    const handler = Meteor.subscribe('todos');
    if (!handler.ready()) {
      return { todos: [], isLoading: true }
    }
    const todos = TodosCollection.find({ userId: user._id }).fetch();
    return { todos, isLoading: false };
  });

  return (
    <Fragment>
      <p>Write staff not to forget :)</p>
      <Search
        className="todo-input"
        placeholder="Type to add new tasks"
        allowClear
        enterButton="Add todo"
        size="large"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onSearch={handleSubmit}
      />
      <List
          className="todos-list"
          bordered
          dataSource={todos}
          renderItem={todo => (
            <List.Item
              actions={[<a key="todos-remove" onClick={() => deleteTask(todo._id)}>remove</a>]}
            >
              {todo.text}
            </List.Item>
          )}
      />
    </Fragment>
  );
};
