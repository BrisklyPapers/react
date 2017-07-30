import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const SearchResults = ({documents}) => {
    return (
        <div>
            {documents.map(document => (
                <SearchResult key={document.url} title={document.fileName} url={document.url} description={document.text.join()} />
            ))}
        </div>
    );
};

SearchResults.propTypes = {
    documents: PropTypes.arrayOf(
        PropTypes.shape({
            fileName: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            text: PropTypes.arrayOf(
                PropTypes.string
            ).isRequired,
            tags: PropTypes.arrayOf(
                PropTypes.string
            ).isRequired
        }).isRequired
    ).isRequired
};

export default SearchResults;