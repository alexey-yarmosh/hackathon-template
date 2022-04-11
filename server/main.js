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
      clientId: 'd918343d3f9de63fe411', // insert your clientId here
      secret: 'e80cfce53116ee69e63347f532c7e7017f831a22', // insert your secret here
    },
  }
);
