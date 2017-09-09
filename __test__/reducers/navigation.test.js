import React from 'react';
import {PAGEVIEW_SEARCH_RESULTS, PAGEVIEW_FILE_UPLOAD, PAGEVIEW_INDEX} from '../../src/actions';
import {navigation} from '../../src/reducers';
import Immutable from 'seamless-immutable';

describe('reducers/navigation', () => {
    it('should return PAGEVIEW_INDEX as initial state', () => {
        expect(
            navigation(undefined, {type: ""})
        ).toEqual(
            PAGEVIEW_INDEX
        );
    });

    it('should return PAGEVIEW_FILE_UPLOAD', () => {
        expect(
            navigation(undefined, {type: PAGEVIEW_FILE_UPLOAD})
        ).toEqual(
            PAGEVIEW_FILE_UPLOAD
        );
    });

    it('should return PAGEVIEW_FILE_UPLOAD unchanged', () => {
        expect(
            navigation(Immutable(PAGEVIEW_FILE_UPLOAD), {type: PAGEVIEW_FILE_UPLOAD})
        ).toEqual(
            PAGEVIEW_FILE_UPLOAD
        );
    });

    it('should change view to PAGEVIEW_SEARCH_RESULTS', () => {
        expect(
            navigation(Immutable(PAGEVIEW_FILE_UPLOAD), {type: PAGEVIEW_SEARCH_RESULTS})
        ).toEqual(
            PAGEVIEW_SEARCH_RESULTS
        );
    });

    it('should change view to PAGEVIEW_FILE_UPLOAD', () => {
        expect(
            navigation(Immutable(PAGEVIEW_SEARCH_RESULTS), {type: PAGEVIEW_FILE_UPLOAD})
        ).toEqual(
            PAGEVIEW_FILE_UPLOAD
        );
    });

    it('should change view to PAGEVIEW_INDEX', () => {
        expect(
            navigation(Immutable(PAGEVIEW_SEARCH_RESULTS), {type: PAGEVIEW_INDEX})
        ).toEqual(
            PAGEVIEW_INDEX
        );
    });

    it('should not change view', () => {
        expect(
            navigation(Immutable(PAGEVIEW_FILE_UPLOAD), {type: ""})
        ).toEqual(
            PAGEVIEW_FILE_UPLOAD
        );
    });
});