import 'babel-polyfill'

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { searchInputKeyPressed, fetchDocuments } from './actions'
import rootReducer from './reducers';
import App from './components/App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const loggerMiddleware = createLogger();

let preloadedState = {};

/* eslint-disable no-underscore-dangle */
let store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

//store.dispatch(searchInputKeyPressed('sebastian'))
//store
//    .dispatch(fetchDocuments(store.searchedText))
//    .then(() => console.log(store.getState()))

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);