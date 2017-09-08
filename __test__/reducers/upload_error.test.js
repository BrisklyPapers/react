import React from 'react';
import {FILE_START_UPLOAD, DOCUMENTS_STORED, DOCUMENTS_NOT_STORED} from '../../src/actions';
import {upload_error} from '../../src/reducers';
import Immutable from 'seamless-immutable';

describe('reducers/upload_error', () => {
    it('should return no error as initial state', () => {
        expect(
            upload_error(undefined, {type: ""})
        ).toEqual(
            {error: false, errorMessage: ""}
        );
    });

    it('should clear error when upload is started', () => {
        expect(
            upload_error(Immutable({error: true}), {type: FILE_START_UPLOAD})
        ).toEqual(
            {error: false, errorMessage: ""}
        );
    });

    it('should clear error when documents where stored', () => {
        expect(
            upload_error(Immutable({error: true}), {type: DOCUMENTS_STORED})
        ).toEqual(
            {error: false, errorMessage: ""}
        );
    });

    it('should create an error when documents where not stored', () => {
        expect(
            upload_error(Immutable({error: false}), {type: DOCUMENTS_NOT_STORED})
        ).toEqual(
            {error: true, errorMessage: "FileUpload: Could not upload files. Try again"}
        );
    });

    it('should not change state if action is unkown', () => {
        expect(
            upload_error(Immutable({error: false}), {type: ""})
        ).toEqual(
            {error: false}
        );
    });
});