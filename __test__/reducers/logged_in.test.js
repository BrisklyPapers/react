import React from 'react';
import {LOG_IN, LOG_OUT} from '../../src/actions';
import {logged_in} from '../../src/reducers';
import Immutable from 'seamless-immutable';

describe('reducers/navigation', () => {
    it('should return false as initial state', () => {
        expect(
            logged_in(undefined, {type: ""})
        ).toEqual(
            false
        );
    });

    it('should return true after login', () => {
        expect(
            logged_in(undefined, {type: LOG_IN})
        ).toEqual(
            true
        );

        expect(
            logged_in(Immutable(LOG_OUT), {type: LOG_IN})
        ).toEqual(
            true
        );
    });

    it('should return false after logout', () => {
        expect(
            logged_in(undefined, {type: LOG_OUT})
        ).toEqual(
            false
        );

        expect(
            logged_in(Immutable(LOG_IN), {type: LOG_OUT})
        ).toEqual(
            false
        );
    });

    it('should return LOG_IN unchanged', () => {
        expect(
            logged_in(Immutable(LOG_IN), {type: "not any known type"})
        ).toEqual(
            LOG_IN
        );
    });
});