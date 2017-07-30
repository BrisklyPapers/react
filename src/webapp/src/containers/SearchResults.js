import SearchResultsComponent from '../components/SearchResults'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        documents: state.searchResults.documents
    }
};

const SearchResults = connect(
    mapStateToProps
)(SearchResultsComponent);

export default SearchResults;