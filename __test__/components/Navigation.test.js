import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Navigation from '../../src/components/Navigation.js';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mockStore = configureMockStore();

describe('components/Navigation', () => {
    it('renders correctly for index', () => {
        const navigation = renderer.create(
            <MuiThemeProvider>
                <Provider store={mockStore({searchedText: ""})}>
                    <Navigation cssStyle="index" loggedIn={false} login={() => {}} logout={() => {}} showFileUploadPage={() => {}} />
                </Provider>
            </MuiThemeProvider>
        );
        expect(navigation.toJSON()).toMatchSnapshot();
    });

    it('renders correctly for login', () => {
        const navigation = renderer.create(
            <MuiThemeProvider>
                <Provider store={mockStore({searchedText: ""})}>
                    <Navigation cssStyle="login" loggedIn={true} login={() => {}} logout={() => {}} showFileUploadPage={() => {}} />
                </Provider>
            </MuiThemeProvider>
        );
        expect(navigation.toJSON()).toMatchSnapshot();
    });

    describe('logged in state', () => {
        let wrapper, showFileUploadPageSpy, loginSpy, logoutSpy;

        beforeEach(() => {
            const store = mockStore({searchedText: ""});
            showFileUploadPageSpy = spy();
            loginSpy = spy();
            logoutSpy = spy();

            wrapper = mount(
                <MuiThemeProvider>
                    <Provider store={store}>
                        <Navigation
                            cssStyle="login"
                            loggedIn={true}
                            login={loginSpy}
                            logout={logoutSpy}
                            showFileUploadPage={showFileUploadPageSpy}
                        />
                    </Provider>
                </MuiThemeProvider>
            );
        });

        it('should display certain elements', () => {
            expect(wrapper.find('Search')).toHaveLength(1);
            expect(wrapper.find('FlatButton').find('#upload')).toHaveLength(3);
            expect(wrapper.find('FlatButton').find('#sign up')).toHaveLength(0);
            expect(wrapper.find('FlatButton').find('#login')).toHaveLength(0);
            expect(wrapper.find('FlatButton').find('#logout')).toHaveLength(3);
        });

        it('should call showFileUploadPage on button click', (done) => {
            expect(wrapper.find('FlatButton').find('#upload')).toHaveLength(3);

            clickMaterialUiFlatButton(wrapper, 'upload');

            expect.assertions(2);
            setTimeout(() => {
                expect(showFileUploadPageSpy.callCount).toEqual(1);
                done();
            }, 0);
        });

        it('should call logout on button click', (done) => {
            expect(wrapper.find('FlatButton').find('#logout')).toHaveLength(3);

            clickMaterialUiFlatButton(wrapper, 'logout');

            expect.assertions(2);
            setTimeout(() => {
                expect(logoutSpy.callCount).toEqual(1);
                done();
            }, 0);
        });
    });

    describe('logged out state on index', () => {
        let wrapper, showFileUploadPageSpy, loginSpy, logoutSpy;

        beforeEach(() => {
            const store = mockStore({searchedText: ""});
            showFileUploadPageSpy = spy();
            loginSpy = spy();
            logoutSpy = spy();

            wrapper = mount(
                <MuiThemeProvider>
                    <Provider store={store}>
                        <Navigation
                            cssStyle="index"
                            loggedIn={false}
                            login={loginSpy}
                            logout={logoutSpy}
                            showFileUploadPage={showFileUploadPageSpy}
                        />
                    </Provider>
                </MuiThemeProvider>
            );
        });

        it('should display certain elements', () => {
            expect(wrapper.find('Search')).toHaveLength(0);
            expect(wrapper.find('FlatButton').find('#upload')).toHaveLength(0);
            expect(wrapper.find('FlatButton').find('#signup')).toHaveLength(3);
            expect(wrapper.find('FlatButton').find('#login')).toHaveLength(3);
            expect(wrapper.find('FlatButton').find('#logout')).toHaveLength(0);
        });

        it('should call login on button click', (done) => {
            expect(wrapper.find('FlatButton').find('#login')).toHaveLength(3);

            clickMaterialUiFlatButton(wrapper, 'login');

            expect.assertions(2);
            setTimeout(() => {
                expect(loginSpy.callCount).toEqual(1);
                done();
            }, 0);
        });
    });
});