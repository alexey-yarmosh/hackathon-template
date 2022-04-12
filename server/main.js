import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ServiceConfiguration } from 'meteor/service-configuration';

import '/imports/db/todos';
import '/imports/api/todos-methods'
import '/imports/api/todos-publications';

const USER_USERNAME = 'baderfall';
const USER_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(USER_USERNAME)) {
    Accounts.createUser({
      username: USER_USERNAME,
      password: USER_PASSWORD,
    });
  }
});

ServiceConfiguration.configurations.upsert(
  { service: 'github' },
  {
    $set: {
      loginStyle: 'popup',
      clientId: Meteor.settings.github.clientId,
      secret: Meteor.settings.github.secret
    },
  }
);
