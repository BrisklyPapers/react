import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const SearchResults = ({documents}) => {
    return (
        <MuiThemeProvider>
            <div>
                {documents.map(document => (
                    <SearchResult key={document.url} title={document.fileName} url={document.url} description={document.text.join()} />
                ))}
            </div>
        </MuiThemeProvider>
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