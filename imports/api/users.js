import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
// import { check } from 'meteor/check';

export const Users = Meteor.users;
if (Meteor.isServer) {
    Meteor.publish('users', function UsersPublication() {
        return Users.find({});
    });
}
