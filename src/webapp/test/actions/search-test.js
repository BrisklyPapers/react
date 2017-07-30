import {
    searchInputKeyPressed, SEARCH_INPUT_KEY_PRESSED,
    searchDocuments, SEARCH_DOCUMENTS} from '../../src/actions/search.js';

describe('actions/searchInputKeyPressed', () => {
    it('test string given', () => {
        expect(
            searchInputKeyPressed("test")
        ).toEqual({
            type: SEARCH_INPUT_KEY_PRESSED,
            text: "test"
        });
    })
});

describe('actions/searchDocuments', () => {
    it('test string given', () => {
        expect(
            searchDocuments("test")
        ).toEqual({
            type: SEARCH_DOCUMENTS,
            text: "test"
        });
    })
});