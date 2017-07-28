import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { searchInputKeyPressed, fetchDocumentsIfNeeded } from '../actions'

class Search extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { dispatch } = this.props
        dispatch(searchInputKeyPressed(event.target.value))
        dispatch(fetchDocumentsIfNeeded(event.target.value))
    }

    render() {
        const { searchedText } = this.props

        return (
            <TextField
                value={searchedText}
                onChange={this.handleChange}
                hintText="Search here .."
            />
        )
    }
}

Search.propTypes = {
    searchedText: PropTypes.string.isRequired,
    documents: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {searchedText, searchResults} = state
    const {
        isFetching,
        lastUpdated,
        documents
        } = searchResults || {
        isFetching: true,
        documents: []
    }

    return {
        searchedText,
        documents,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(Search)