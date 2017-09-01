import React from 'react';
import SearchResults from '../../src/components/SearchResults.js';
import renderer from 'react-test-renderer';

describe('components/SearchResults', () => {
    it('renders correctly', () => {
        const documents = [];
        const searchResults = renderer.create(
            <SearchResults documents={[]}/>
        );
        expect(searchResults.toJSON()).toMatchSnapshot();
    });
});