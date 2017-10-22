/* Globals */
import React from 'react';
/* Components */
import Nav from './Nav';
import Users from './Users';
import TaskList from './TaskList';

import { Router, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();
// App component - represents the whole app
const App = () => {
    return (
        <Router history={browserHistory}>
            <div className="container">
                <Nav />
                <Route exact path="/todos" component={TaskList} />
                <Route exact path="/users" component={Users} />
            </div>
        </Router>
    );
};

export default App;
