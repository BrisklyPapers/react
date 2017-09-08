import React from 'react';
import {SEARCH_INPUT_KEY_PRESSED, SEARCH_DOCUMENTS, RECEIVE_DOCUMENTS, RECEIVE_DOCUMENTS_ERROR} from '../../src/actions';
import {searchResults} from '../../src/reducers';
import Immutable from 'seamless-immutable';

describe('reducers/searchResults SEARCH_INPUT_KEY_PRESSED', () => {
    it('key pressed', () => {
        expect(
            searchResults(Immutable({}), {type: SEARCH_INPUT_KEY_PRESSED})
        ).toEqual({
            didInvalidate: true
        });
    });
    it('invalidate', () => {
        expect(
            searchResults(Immutable({didInvalidate: false}), {type: SEARCH_INPUT_KEY_PRESSED})
        ).toEqual({
            didInvalidate: true
        });
    });
});

describe('reducers/searchResults SEARCH_DOCUMENTS', () => {
   it('trigger search', () => {
       expect(
           searchResults(Immutable({}), {type: SEARCH_DOCUMENTS})
       ).toEqual({
           isFetching: true,
           didInvalidate: false
       });
   });
});

describe('reducers/searchResults RECEIVE_DOCUMENTS', () => {
   it('received documents', () => {
       expect(
           searchResults(Immutable({}), {type: RECEIVE_DOCUMENTS, documents: [{a: "bc"}], receivedAt: "now"})
       ).toEqual({
           isFetching: false,
           didInvalidate: false,
           documents: [{a: "bc"}],
           lastUpdated: "now"
       });
   });
});

describe('reducers/searchResults RECEIVE_DOCUMENTS_ERROR', () => {
   it('should return received documents', () => {
       expect(
           searchResults(Immutable({}), {type: RECEIVE_DOCUMENTS_ERROR, documents: [{a: "bc"}], receivedAt: "now"})
       ).toEqual({
           isFetching: false,
           didInvalidate: false,
           documents: []
       });
   });
});

describe('reducers/searchResults RECEIVE_DOCUMENTS_ERROR', () => {
   it('should return default state and handle an invalid action', () => {
       expect(
           searchResults(undefined, {type: ""})
       ).toEqual({
           isFetching: false,
           didInvalidate: false,
           documents: []
       });
   });
});