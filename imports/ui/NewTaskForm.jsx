/* Globals */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class NewTaskForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Meteor.call('tasks.insert', text);
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    render() {
        return this.props.currentUser
            ? <form
                  className="new-task"
                  onSubmit={this.handleSubmit.bind(this)}
              >
                  <input
                      type="text"
                      ref="textInput"
                      placeholder="Type to add new tasks"
                  />
              </form>
            : '';
    }
}

NewTaskForm.propTypes = {
    /* Meteor */
    currentUser: PropTypes.object
};

export default createContainer(() => {
    return {
        currentUser: Meteor.user()
    };
}, NewTaskForm);
