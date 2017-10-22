import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// Task component - represents a single todo item
export default class User extends Component {
    render() {
        console.log('useritem', this.props);
        return (
            <li>
                <span className="text">
                    <strong>{this.props.user.username}</strong>
                </span>
            </li>
        );
    }
}

User.propTypes = {
    /* Component */
    user: PropTypes.object.isRequired
};
