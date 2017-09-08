import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../src/index.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import App from '../src/components/App';

jest.mock('react-dom', () => ({render: jest.fn()}));

it('renders without crashing', () => {
    expect(ReactDOM.render).toBeCalled()
});