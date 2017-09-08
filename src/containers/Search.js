import { connect } from 'react-redux';
import { searchInputKeyPressed, fetchDocumentsIfNeeded, showResultPage } from '../actions';
import SearchComponent from '../components/Search';

const mapStateToProps = (state) => {
    return {
        searchedText: state.searchedText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        triggerSearch: (event) => {
            dispatch(searchInputKeyPressed(event.target.value));
            dispatch(fetchDocumentsIfNeeded(event.target.value));
        },
        onFocus: () => {
            dispatch(showResultPage());
        }
    };
};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);