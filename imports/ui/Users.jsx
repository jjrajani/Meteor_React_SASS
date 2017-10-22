/* Globals */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

/* DB Models */
import { Users } from '../api/users.js';
/* Components */
import User from './User.jsx';
/* Task List Container Component */
const UserList = ({ users, currentUser }) => {
    return users.map(user => {
        const currentUserId = currentUser && currentUser._id;
        return <User key={user._id} user={user} />;
    });
};

UserList.propTypes = {
    /* Meteor */
    users: PropTypes.array.isRequired,
    currentUser: PropTypes.object
};

function UserListContainer() {
    Meteor.subscribe('users');
    return {
        users: Users.find({}, { sort: { createdAt: -1 } }).fetch(),
        currentUser: Meteor.user()
    };
}

export default createContainer(UserListContainer, UserList);
