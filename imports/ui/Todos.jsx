import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { TodosCollection } from '/imports/db/todos';

export const Todos = () => {
  const user = useTracker(() => Meteor.user());

  const [text, setText] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!text) return;
    Meteor.call('todos.insert', text);
    setText("");
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
    <div>
      <h2>Todos</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type to add new tasks"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      {isLoading && 'Loading...'}
      {!isLoading && <ul>{todos.map(
        todo => <li key={todo._id}>
          {todo.text}<button onClick={() => deleteTask(todo._id)}>&times;</button>
        </li>
      )}</ul>}
    </div>
  );
};
