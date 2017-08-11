import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class Search extends React.Component {
    render () {
        return (
            <TextField
                value={this.props.searchedText}
                onChange={this.props.triggerSearch}
                onFocus={this.props.onFocus}
                hintText="Search here .."
            />
        );
    }
}

Search.propTypes = {
    searchedText: PropTypes.string.isRequired,
    triggerSearch: PropTypes.func.isRequired,
    onFocus: PropTypes.func
};

export default Search;