import React from 'react';
import {SEARCH_INPUT_KEY_PRESSED} from '../../src/actions/search.js';
import {searchedText} from '../../src/reducers/searchedText';
import Immutable from 'seamless-immutable';

describe('reducers/searchedText', () => {
    it('should return an empty state if no input is given', () => {
        expect(
            searchedText(Immutable(""), {type: SEARCH_INPUT_KEY_PRESSED, text: ""})
        ).toEqual(
            ""
        );
    });
    it('should return typed text after key press', () => {
        expect(
            searchedText(Immutable("a"), {type: SEARCH_INPUT_KEY_PRESSED, text: "ab"})
        ).toEqual(
            "ab"
        );
    });
    it('should return the default state', () => {
        expect(
            searchedText(undefined, {type: ""})
        ).toEqual(
            ""
        );
    });
    it('should return the current state if action is not valid', () => {
        expect(
            searchedText(Immutable("f"), {type: ""})
        ).toEqual(
            "f"
        );
    });
});