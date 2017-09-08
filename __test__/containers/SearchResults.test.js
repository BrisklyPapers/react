import React from 'react';
import SearchResults from '../../src/containers/SearchResults';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('containers/SearchResults', () => {
    let wrapper, store;
    const documents = [
        {
            fileName: 'bill.pdf',
            url: 'http://briskly-papers.com',
            text: ['testing search results'],
            tags: ['bill', 'source']
        },
        {
            fileName: 'flower.jpg',
            url: 'https://localhost/search?q=flowers',
            text: ['pictures showing some flowers'],
            tags: ['flower', 'summer']
        }
    ];

    beforeEach(() => {
        store = mockStore({searchResults: {documents}});
        store.dispatch = jest.fn();
        wrapper = shallow(<SearchResults store={store} />);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining ({
            documents
        }));
    });
});