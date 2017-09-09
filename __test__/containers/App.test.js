import React from 'react';
import App from '../../src/containers/App';
import configureMockStore from 'redux-mock-store';
import {shallow} from 'enzyme';

const mockStore = configureMockStore();

describe('containers/ResultPage', () => {
   let wrapper, store;

    it('maps state and dispatch to props when logged in', () => {
        store = mockStore({logged_in: true});
        wrapper = shallow(<App store={store}/>);
        expect(wrapper.props()).toEqual(expect.objectContaining({
            loggedIn: true,
            cssStyle: 'login'
        }));
    });

    it('maps state and dispatch to props when logged out', () => {
        store = mockStore({logged_in: false});
        wrapper = shallow(<App store={store}/>);
        expect(wrapper.props()).toEqual(expect.objectContaining({
            loggedIn: false,
            cssStyle: 'index'
        }));
    });
});