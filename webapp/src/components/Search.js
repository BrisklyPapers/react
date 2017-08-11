import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Search extends React.Component {
    render () {
        return (
            <MuiThemeProvider>
                <TextField
                    id="search"
                    value={this.props.searchedText}
                    onChange={this.props.triggerSearch}
                    onFocus={this.props.onFocus}
                    hintText="Search here .."
                />
            </MuiThemeProvider>
        );
    }
}

Search.propTypes = {
    searchedText: PropTypes.string.isRequired,
    triggerSearch: PropTypes.func.isRequired,
    onFocus: PropTypes.func
};

export default Search;