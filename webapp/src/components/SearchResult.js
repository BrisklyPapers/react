import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = ({title, url, description}) => {
    return (
        <div>
            <a title={title} href={url} target="_blank">{title}</a>
            <br/>
            <div dangerouslySetInnerHTML={{__html: description}}/>
        </div>
    )
};

SearchResult.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default SearchResult;