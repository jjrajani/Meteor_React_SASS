import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import appReducer from '../imports/ui/reducers';
import reduxThunk from 'redux-thunk';
const store = createStore(appReducer, applyMiddleware(reduxThunk));

Meteor.startup(() => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
});
