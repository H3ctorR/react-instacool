import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './ducks';
import { reducer as formReducer } from 'redux-form';

import services from './services';

const store = createStore(combineReducers({
    ...reducers,
    form:formReducer
}), applyMiddleware(thunk.withExtraArgument(services)));
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
