import React from 'react';
import IndexPage from '../../src/containers/IndexPage';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {PAGEVIEW_INDEX} from '../../src/actions';

const mockStore = configureMockStore();

describe('containers/IndexPage', () => {
   let wrapper, store;

    it('maps state and dispatch to props', () => {
        store = mockStore({});
        wrapper = shallow(<IndexPage store={store}/>);
        expect(wrapper.props()).toEqual(expect.objectContaining({
            visible: expect.any(Boolean)
        }));
    });

    it('should be visible', () => {
        store = mockStore({navigation: PAGEVIEW_INDEX});
        wrapper = shallow(<IndexPage store={store}/>);
        expect(wrapper.props().visible).toEqual(true);
    });

    it('should be hidden', () => {
        store = mockStore({navigation: ''});
        wrapper = shallow(<IndexPage store={store}/>);
        expect(wrapper.props().visible).toEqual(false);
    });
});