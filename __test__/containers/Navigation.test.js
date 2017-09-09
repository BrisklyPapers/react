import React from 'react';
import Navigation from '../../src/containers/Navigation';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import dependency from '../../src/actions';

jest.mock('../../src/actions', () => ({
    showFileUploadPage: jest.fn().mockImplementation(() => 'result of showFileUploadPage'),
    showResultPage: jest.fn().mockImplementation(() => 'result of showResultPage'),
    showIndexPage: jest.fn().mockImplementation(() => 'result of showIndexPage'),
    login: jest.fn().mockImplementation(() => 'result of login'),
    logout: jest.fn().mockImplementation(() => 'result of logout')
}));

const mockStore = configureMockStore();

describe('containers/Navigation', () => {
    let wrapper, store;

    describe('logged in', () => {
        beforeEach(() => {
            store = mockStore({logged_in: true});
            store.dispatch = spy();

            // call shallow twice in order to call inner functions
            // @see https://github.com/reactjs/redux/issues/1534
            wrapper = shallow(<Navigation store={store} />).shallow();
        });

        it('maps state to props', () => {
            expect(wrapper.instance().props.loggedIn).toEqual(true);
            expect(wrapper.instance().props.cssStyle).toEqual('login');
        });

        describe('event handlers', () => {

            it('should dispatch storeDocuments', () => {
                wrapper.instance().props.showFileUploadPage();
                expect(dependency.showFileUploadPage).toHaveBeenCalledWith();
                expect(store.dispatch.calledWithMatch('result of showFileUploadPage')).toEqual(true);
            });

            it('should dispatch login', () => {
                wrapper.instance().props.login();
                expect(dependency.login).toHaveBeenCalledWith();
                expect(store.dispatch.calledWithMatch('result of login')).toEqual(true);
                expect(dependency.showResultPage).toHaveBeenCalledWith();
                expect(store.dispatch.calledWithMatch('result of showResultPage')).toEqual(true);
            });

            it('should dispatch logout', () => {
                wrapper.instance().props.logout();
                expect(dependency.logout).toHaveBeenCalledWith();
                expect(store.dispatch.calledWithMatch('result of logout')).toEqual(true);
                expect(dependency.showIndexPage).toHaveBeenCalledWith();
                expect(store.dispatch.calledWithMatch('result of showIndexPage')).toEqual(true);
            });
        });
    });

    describe('logged out', () => {
        beforeEach(() => {
            store = mockStore({logged_in: false});
            store.dispatch = spy();

            // call shallow twice in order to call inner functions
            // @see https://github.com/reactjs/redux/issues/1534
            wrapper = shallow(<Navigation store={store}/>).shallow();
        });

        it('maps state to props', () => {
            expect(wrapper.instance().props.loggedIn).toEqual(false);
            expect(wrapper.instance().props.cssStyle).toEqual('index');
        });
    })
});