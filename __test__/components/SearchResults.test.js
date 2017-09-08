import React from 'react';
import SearchResults from '../../src/components/SearchResults.js';
import renderer from 'react-test-renderer';

describe('components/SearchResults', () => {
    it('renders correctly', () => {
        const searchResults = renderer.create(
            <SearchResults documents={[]}/>
        );
        expect(searchResults.toJSON()).toMatchSnapshot();
    });

    it('contains some search results', () => {
        const documents = [
            {
                fileName: 'bill.pdf',
                url: 'http://briskly-papers.com',
                text: ['testing search results'],
                tags: ['bill', 'source']
            },
            {
                fileName: 'flower.jpg',
                url: 'https://localhost/search?q=flowers',
                text: ['pictures showing some flowers'],
                tags: ['flower', 'summer']
            }
        ];
        const searchResults = renderer.create(
            <SearchResults documents={documents}/>
        );
        expect(searchResults.toJSON()).toMatchSnapshot();
    });
});