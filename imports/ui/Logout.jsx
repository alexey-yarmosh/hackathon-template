import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

export const Logout = () => {
  const user = useTracker(() => Meteor.user());

  const logout = () => Meteor.logout();
  return (
    <div>
      {user.username || user.profile.name}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
