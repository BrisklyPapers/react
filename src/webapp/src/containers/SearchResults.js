import React, { Component } from 'react'
import SearchResult from '../components/SearchResult'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class SearchResults extends Component {

    render() {
        const { documents } = this.props

        return (
            <div>
                {documents.map(document => (
                    <SearchResult title={document.fileName} url={document.url} description={document.text.join()} />
                ))}
            </div>
        )
    }
}

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

const mapStateToProps = (state) => {
    return {
        documents: state.searchResults.documents
    }
}

export default connect(
    mapStateToProps
)(SearchResults)