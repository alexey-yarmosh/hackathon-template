import { Meteor } from 'meteor/meteor';
import { TodosCollection } from '/imports/db/todos';

Meteor.publish('todos', function publishTasks() {
  return TodosCollection.find({ userId: this.userId });
});
