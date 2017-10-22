/* Globals */
import React from 'react';
/* Components */
import Header from './Header';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import NewTaskForm from './NewTaskForm.jsx';
import TaskList from './TaskList';
import ListViewToggle from './ListViewToggle';
// App component - represents the whole app
const App = () =>
    <div className="container">
        <Header>
            <ListViewToggle />
            <AccountsUIWrapper />
            <NewTaskForm />
        </Header>
        <TaskList />
    </div>;

export default App;
