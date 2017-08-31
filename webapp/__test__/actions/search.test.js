import {
    searchInputKeyPressed, SEARCH_INPUT_KEY_PRESSED,
    searchDocuments, SEARCH_DOCUMENTS,
    fetchDocumentsIfNeeded, RECEIVE_DOCUMENTS, RECEIVE_DOCUMENTS_ERROR
} from '../../src/actions/search.js';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions/searchInputKeyPressed', () => {
    it('returns the given input', () => {
        expect(
            searchInputKeyPressed("test")
        ).toEqual({
            type: SEARCH_INPUT_KEY_PRESSED,
            text: "test"
        });
    });
});

describe('actions/searchDocuments', () => {
    it('returns the given test string', () => {
        expect(
            searchDocuments("test")
        ).toEqual({
            type: SEARCH_DOCUMENTS,
            text: "test"
        });
    })
});

describe('actions/fetchDocuments', () => {
    let store, myMock;

    beforeEach(() => {
        const now = Date.now();
        Date.now = jest.genMockFunction().mockReturnValue(now);

        store = mockStore({});
    });

    afterEach(() => {
        myMock.restore();
    });

    it('returns date and a valid response', () => {
        const mockResult = [
            {fileName: "foo.pdf", url: "http://", text: "foo", tags: []}
        ];
        myMock = fetchMock.get('/ajax/document/search?q=foo', mockResult);

        return store.dispatch(fetchDocumentsIfNeeded("foo"))
            .then(() => {
                expect(myMock.called('/ajax/document/search?q=foo')).toBe(true);

                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(2);
                expect(expectedActions).toContainEqual({
                    type: SEARCH_DOCUMENTS,
                    text: "foo"
                });
                expect(expectedActions).toContainEqual({
                    type: RECEIVE_DOCUMENTS,
                    documents: mockResult,
                    receivedAt: Date.now()
                });
        });
    });

    it('returns an invalid response', () => {
        const mockResult = [
            {fileName: "foo.pdf", url: "http://", text: "foo", tags: []}
        ];
        myMock = fetchMock.get('/ajax/document/search?q=foo', 401);

        return store.dispatch(fetchDocumentsIfNeeded("foo"))
            .then(() => {
                expect(myMock.called('/ajax/document/search?q=foo')).toBe(true);

                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(2);
                expect(expectedActions).toContainEqual({
                    type: SEARCH_DOCUMENTS,
                    text: "foo"
                });
                expect(expectedActions).toContainEqual({
                    type: RECEIVE_DOCUMENTS_ERROR,
                    documents: [],
                    receivedAt: Date.now()
                });
        });
    });
});