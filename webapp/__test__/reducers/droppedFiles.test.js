import React from 'react';
import {FILE_DROP, DOCUMENTS_STORED, DOCUMENTS_NOT_STORED} from '../../src/actions';
import {droppedFiles} from '../../src/reducers/droppedFiles';
import Immutable from 'seamless-immutable';

describe('reducers/droppedFiles', () => {
    it('should return an an empty array as default', () => {
        expect(
            droppedFiles(undefined, {type: ""})
        ).toEqual(
            []
        );
    });
    it('should return an an empty array if files where stored', () => {
        expect(
            droppedFiles(Immutable([{name: "foo.pdf"}]), {type: DOCUMENTS_STORED})
        ).toEqual(
            []
        );
    });
    it('should return an an empty array if files where not stored', () => {
        expect(
            droppedFiles(Immutable([{name: "foo.pdf"}]), {type: DOCUMENTS_NOT_STORED})
        ).toEqual(
            []
        );
    });
    it('should add dropped file to empty state', () => {
        const document = {
            name: "foo.pdf",
            size: 17,
            lastModified: 52376457234,
            type: "pdf"
        };
        expect(
            droppedFiles(Immutable({}), {type: FILE_DROP, document})
        ).toEqual(
            [document]
        );
    });
    it('should add dropped file to state with existing files', () => {
        const document = {
            name: "foo.pdf",
            size: 17,
            lastModified: 52376457234,
            type: "pdf"
        };
        const document2 = {
            name: "foo2.pdf",
            size: 17,
            lastModified: 52376457234,
            type: "pdf"
        };
        expect(
            droppedFiles(Immutable([document]), {type: FILE_DROP, document: document2})
        ).toEqual(
            [document, document2]
        );
    });
    it('should ignore action if document is missing', () => {
        expect(
            droppedFiles(Immutable([]), {type: FILE_DROP})
        ).toEqual(
            []
        );
    });
});