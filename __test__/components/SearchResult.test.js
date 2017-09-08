import React from 'react';
import SearchResult from '../../src/components/SearchResult.js';
import renderer from 'react-test-renderer';

describe('components/SearchResult', () => {
    it('renders correctly', () => {
        const search = renderer.create(
            <SearchResult title="Foo" url="http://abc.de" description="desc" />
        );
        expect(search.toJSON()).toMatchSnapshot();
    })
});