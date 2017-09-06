import React from 'react';
import ResultPage from '../../src/containers/ResultPage';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {PAGEVIEW_SEARCH_RESULTS} from '../../src/actions';

const mockStore = configureMockStore();

describe('containers/ResultPage', () => {
   let wrapper, store;

    it('maps state and dispatch to props', () => {
        store = mockStore({});
        wrapper = shallow(<ResultPage store={store}/>);
        expect(wrapper.props()).toEqual(expect.objectContaining({
            visible: expect.any(Boolean)
        }));
    });

    it('should be visible', () => {
        store = mockStore({navigation: PAGEVIEW_SEARCH_RESULTS});
        wrapper = shallow(<ResultPage store={store}/>);
        expect(wrapper.props().visible).toEqual(true);
    });

    it('should be hidden', () => {
        store = mockStore({navigation: ''});
        wrapper = shallow(<ResultPage store={store}/>);
        expect(wrapper.props().visible).toEqual(false);
    });
});