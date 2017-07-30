import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

const Search = ({searchedText, triggerSearch}) => {
    return (
        <TextField
            value={searchedText}
            onChange={triggerSearch}
            hintText="Search here .."
        />
    );
};

Search.propTypes = {
    searchedText: PropTypes.string.isRequired,
    triggerSearch: PropTypes.func.isRequired
};

export default Search