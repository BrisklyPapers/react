import {
    showResultPage, PAGEVIEW_SEARCH_RESULTS,
    showFileUploadPage, PAGEVIEW_FILE_UPLOAD,
    showIndexPage, PAGEVIEW_INDEX
} from '../../src/actions';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('actions/showIndexPage', () => {
    it('returns PAGEVIEW_INDEX', () => {
        expect(
            showIndexPage()
        ).toEqual({
            type: PAGEVIEW_INDEX
        });
    });
});

describe('actions/showResultPage', () => {
    it('returns PAGEVIEW_SEARCH_RESULTS', () => {
        expect(
            showResultPage()
        ).toEqual({
            type: PAGEVIEW_SEARCH_RESULTS
        });
    });
});

describe('actions/showFileUploadPage', () => {
    it('returns PAGEVIEW_FILE_UPLOAD', () => {
        expect(
            showFileUploadPage()
        ).toEqual({
            type: PAGEVIEW_FILE_UPLOAD
        });
    })
});