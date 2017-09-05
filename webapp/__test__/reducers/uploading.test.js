import React from 'react';
import {FILE_START_UPLOAD, DOCUMENTS_STORED, DOCUMENTS_NOT_STORED} from '../../src/actions';
import {uploading} from '../../src/reducers';
import Immutable from 'seamless-immutable';

describe('reducers/uploading', () => {
    it('should return false as initial state', () => {
        expect(
            uploading(undefined, {type: ""})
        ).toEqual(
            false
        );
    });

    it('should return true when upload starts', () => {
        expect(
            uploading(Immutable(false), {type: FILE_START_UPLOAD})
        ).toEqual(
            true
        );
    });

    it('should return false when documents are stored', () => {
        expect(
            uploading(Immutable(true), {type: DOCUMENTS_STORED})
        ).toEqual(
            false
        );
    });

    it('should return false when documents are not stored', () => {
        expect(
            uploading(Immutable(true), {type: DOCUMENTS_NOT_STORED})
        ).toEqual(
            false
        );
    });

    it('should not change state if action is unkown', () => {
        expect(
            uploading(Immutable(true), {type: ""})
        ).toEqual(
            true
        );
    });
});