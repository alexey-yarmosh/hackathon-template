import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { Hello } from './Hello.jsx';
import { Login } from './Login.jsx';
import { Logout } from './Logout.jsx';
import { Todos } from './Todos.jsx';
import { LoginWithGithub } from './LoginWithGithub.jsx';

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <div>
      {/* <h1>Welcome to Meteor!</h1> */}
      {!user && <LoginWithGithub/>}
      {!user && <Login/>}
      {user && <Logout/>}
      {user && <Todos/>}
      {/* <Hello/> */}
    </div>
  )
};
