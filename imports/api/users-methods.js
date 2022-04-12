import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
 
Meteor.methods({
  'users.doesUserExists'(username) {
    check(username, String);

    return !!Accounts.findUserByUsername(username);
  }
});
