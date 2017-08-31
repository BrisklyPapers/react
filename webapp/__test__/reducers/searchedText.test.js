import React from 'react';
import {SEARCH_INPUT_KEY_PRESSED} from '../../src/actions/search.js';
import {searchedText} from '../../src/reducers/searchedText';

describe('reducers/searchedText', () => {
    it('returns an empty state if no input is given', () => {
        expect(
            searchedText("", {type: SEARCH_INPUT_KEY_PRESSED, text: ""})
        ).toEqual(
            ""
        );
    });
    it('returns typed text after key press', () => {
        expect(
            searchedText("a", {type: SEARCH_INPUT_KEY_PRESSED, text: "ab"})
        ).toEqual(
            "ab"
        );
    });
    it('returns the default state', () => {
        expect(
            searchedText(undefined, {type: ""})
        ).toEqual(
            ""
        );
    });
    it('returns the current state if action is not valid', () => {
        expect(
            searchedText("f", {type: ""})
        ).toEqual(
            "f"
        );
    });
});