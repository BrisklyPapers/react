import {
    showResultPage, PAGEVIEW_SEARCH_RESULTS,
    showFileUploadPage, PAGEVIEW_FILE_UPLOAD
} from '../../src/actions/navigation.js';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

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