import React from 'react';
import Search from '../../src/containers/Search';
import dependency from '../../src/actions';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

jest.mock('../../src/actions', () => ({
    searchInputKeyPressed: jest.fn(),
    fetchDocumentsIfNeeded: jest.fn(),
    showResultPage: jest.fn()
}));

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
        expect(dependency.searchInputKeyPressed).toBeCalled();
        expect(dependency.fetchDocumentsIfNeeded).toBeCalled();
    });

    it('maps onFocus to dispatch showResultPage', () => {
        wrapper.props().onFocus();

        expect(store.dispatch.callCount).toEqual(1);
        expect(dependency.showResultPage).toBeCalled();
    });

});