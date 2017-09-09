import {
    login, LOG_IN,
    logout, LOG_OUT
} from '../../src/actions';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('actions/login', () => {
    it('returns LOG_IN', () => {
        expect(
            login()
        ).toEqual({
            type: LOG_IN
        });
    });
});

describe('actions/logout', () => {
    it('returns LOG_OUT', () => {
        expect(
            logout()
        ).toEqual({
            type: LOG_OUT
        });
    })
});