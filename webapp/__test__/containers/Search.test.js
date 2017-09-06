import React from 'react';
import Search from '../../src/containers/Search';
import {SEARCH_INPUT_KEY_PRESSED, PAGEVIEW_SEARCH_RESULTS} from '../../src/actions';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('containers/Search', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({searchedText: "fun"});
        store.dispatch = spy();
        wrapper = shallow(<Search store={store} />);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining ({
            searchedText: "fun",
            triggerSearch: expect.any(Function),
            onFocus: expect.any(Function),
        }));
    });

    it('maps triggerSearch to dispatch search action', () => {
        const event = {target: {value: "test"}};
        wrapper.props().triggerSearch(event);

        expect(store.dispatch.callCount).toEqual(2);
        expect(store.dispatch.calledWithMatch({text: "test", type: SEARCH_INPUT_KEY_PRESSED})).toEqual(true);
        //expect(store.dispatch.calledWithMatch({text: "test", type: 'SEARCH_DOCUMENTS'})).toEqual(true);
    });

    it('maps triggerSearch to dispatch search action', () => {
        wrapper.props().onFocus();

        expect(store.dispatch.callCount).toEqual(1);
        expect(store.dispatch.calledWithMatch({type: PAGEVIEW_SEARCH_RESULTS})).toEqual(true);
    });

});