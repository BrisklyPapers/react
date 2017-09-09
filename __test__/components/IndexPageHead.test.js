import React from 'react';
import IndexPageHead from '../../src/components/IndexPageHead.js';
import {PAGEVIEW_INDEX} from '../../src/actions';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

describe('components/IndexPageHead', () => {
    it('renders correctly', () => {
        const search = renderer.create(
            <Provider store={mockStore({navigation: PAGEVIEW_INDEX})}>
                <IndexPageHead />
            </Provider>
        );
        expect(search.toJSON()).toMatchSnapshot();
    });
});