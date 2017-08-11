import React from 'react';
import {SEARCH_INPUT_KEY_PRESSED} from '../../src/actions/search.js';
import {searchedText} from '../../src/reducers/searchedText';

describe('reducers/searchedText', () => {
    it('no input given', () => {
        expect(
            searchedText("", {type: SEARCH_INPUT_KEY_PRESSED, text: ""})
        ).toEqual(
            ""
        );
    });
    it('key pressed', () => {
        expect(
            searchedText("a", {type: SEARCH_INPUT_KEY_PRESSED, text: "ab"})
        ).toEqual(
            "ab"
        );
    });
    it('unkown action + default state', () => {
        expect(
            searchedText(undefined, {type: ""})
        ).toEqual(
            ""
        );
    });
});