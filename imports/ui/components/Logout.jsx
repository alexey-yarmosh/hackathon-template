import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Space } from 'antd';

export const Logout = () => {
  const user = useTracker(() => Meteor.user());

  const logout = () => Meteor.logout();
  return (
    <div className="logout">
      <Space>
        {user.username || user.profile.name}
        <Button onClick={logout} ghost>Logout</Button>
      </Space>
    </div>
  );
}
