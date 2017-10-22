/* Globals */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

/* DB Models */
import { Tasks } from '../api/tasks.js';
/* Components */
import Task from './Task.jsx';
import Header from './Header';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import NewTaskForm from './NewTaskForm.jsx';
import ListViewToggle from './ListViewToggle';

/* Task List Container Component */
const TaskList = ({ tasks, hideCompleted, currentUser }) => {
    let filteredTasks = tasks;
    if (hideCompleted) {
        filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return (
        <div>
            <Header>
                <ListViewToggle />
                <AccountsUIWrapper />
                <NewTaskForm />
            </Header>
            {filteredTasks.map(task => {
                const currentUserId = currentUser && currentUser._id;
                const showPrivateButton = task.owner === currentUserId;
                return (
                    <Task
                        key={task._id}
                        task={task}
                        showPrivateButton={showPrivateButton}
                    />
                );
            })}
        </div>
    );
};

TaskList.propTypes = {
    /* Redux */
    hideCompleted: PropTypes.bool.isRequired,
    /* Meteor */
    tasks: PropTypes.array.isRequired,
    currentUser: PropTypes.object
};

function mapStateToProps({ todoList }) {
    return { hideCompleted: todoList.hideCompleted };
}

function TaskListContainer() {
    Meteor.subscribe('tasks');
    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
        currentUser: Meteor.user()
    };
}

export default connect(mapStateToProps)(
    createContainer(TaskListContainer, TaskList)
);
