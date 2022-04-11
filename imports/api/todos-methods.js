import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { TodosCollection } from '/imports/db/todos';
 
Meteor.methods({
  'todos.insert'(text) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    TodosCollection.insert({
      text,
      createdAt: new Date,
      userId: this.userId,
    })
  },

  'todos.remove'(taskId) {
    check(taskId, String);
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    const task = TodosCollection.findOne({ _id: taskId, userId: this.userId });

    if (!task) {
      throw new Meteor.Error('Access denied.');
    }

    TodosCollection.remove(taskId);
  }

});
