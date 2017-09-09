import React from 'react';
import IndexPageDescription from '../../src/components/IndexPageDescription.js';
import {PAGEVIEW_INDEX} from '../../src/actions';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

describe('components/IndexPageDescription', () => {
    it('renders correctly', () => {
        const search = renderer.create(
            <Provider store={mockStore({navigation: PAGEVIEW_INDEX})}>
                <IndexPageDescription />
            </Provider>
        );
        expect(search.toJSON()).toMatchSnapshot();
    });
});