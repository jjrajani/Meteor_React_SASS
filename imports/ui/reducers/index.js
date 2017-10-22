import { combineReducers } from 'redux';
import todoList from './todoList';

const appReducer = combineReducers({
    todoList
});

export default appReducer;
