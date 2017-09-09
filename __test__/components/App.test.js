import React from 'react';
import App from '../../src/components/App.js';
const ReactShallowRenderer = require('react-test-renderer/shallow');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock'

const renderer = new ReactShallowRenderer();

describe('components/App', () => {
    it('renders correctly', () => {
        renderer.render(
            <App />
        );
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});