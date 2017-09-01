import React from 'react';
import Navigation from '../../src/components/Navigation.js';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

describe('components/Navigation', () => {
    it('renders correctly', () => {
        const navigation = renderer.create(
            <MuiThemeProvider>
                <Provider store={mockStore({searchedText: ""})}>
                    <Navigation />
                </Provider>
            </MuiThemeProvider>
        );
        expect(navigation.toJSON()).toMatchSnapshot();
    });
});