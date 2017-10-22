import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';

// App component - represents the whole app
const Header = ({ incompleteCount, children }) => {
    return (
        <header>
            <h1>
                Todo List ({incompleteCount})
            </h1>
            {children}
        </header>
    );
};
Header.propTypes = {
    /* Meteor */
    incompleteCount: PropTypes.number.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('tasks');

    return {
        incompleteCount: Tasks.find({ checked: { $ne: true } }).count()
    };
}, Header);
