import React from 'react';
import App from '../../src/components/App.js';
import {PAGEVIEW_INDEX, PAGEVIEW_SEARCH_RESULTS} from '../../src/actions';
const ReactShallowRenderer = require('react-test-renderer/shallow');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const renderer = new ReactShallowRenderer();

describe('components/App', () => {
    it('renders correctly', () => {
        renderer.render(
            <App store={mockStore({loggedIn: false, navigation: PAGEVIEW_INDEX})} cssStyle="index" loggedIn={false}/>
        );
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });

    it('renders correctly when logged in', () => {
        renderer.render(
            <App store={mockStore({loggedIn: true, navigation: PAGEVIEW_SEARCH_RESULTS})} cssStyle="login" loggedIn={true}/>
        );
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});