import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';

// App component - represents the whole app
const ListViewToggle = ({ hideCompleted, toggleHideCompleted }) => {
    return (
        <label className="hide-completed">
            <input
                type="checkbox"
                checked={hideCompleted}
                onChange={toggleHideCompleted}
            />
            Hide Completed Tasks
        </label>
    );
};
ListViewToggle.propTypes = {
    /* Redux */
    hideCompleted: PropTypes.bool.isRequired,
    toggleHideCompleted: PropTypes.func.isRequired
};

function mapStateToProps({ todoList }) {
    return { hideCompleted: todoList.hideCompleted };
}

export default connect(mapStateToProps, {
    toggleHideCompleted: actions.todoListActions.toggleHideCompleted
})(ListViewToggle);
