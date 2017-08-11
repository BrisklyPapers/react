import React from 'react';
import Search from '../../src/components/Search.js';
import renderer from 'react-test-renderer';

describe('components/Search', () => {
    it('renders correctly', () => {
        const search = renderer.create(
            <Search searchedText="test" triggerSearch={() => {}}/>
        );
        expect(search.toJSON()).toMatchSnapshot();
    });
});