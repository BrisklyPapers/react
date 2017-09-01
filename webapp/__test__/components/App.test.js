import React from 'react';
import App from '../../src/components/App.js';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore();

describe('components/App', () => {
    it('renders correctly', () => {
        const app = renderer.create(
            <MuiThemeProvider>
                <Provider store={mockStore({searchedText: ""})}>
                    <App />
                </Provider>
            </MuiThemeProvider>
        );
        expect(app.toJSON()).toMatchSnapshot();
    });
});