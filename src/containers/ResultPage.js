import { connect } from 'react-redux';
import PageView from '../components/PageView';
import {PAGEVIEW_SEARCH_RESULTS} from '../actions'

const mapStateToProps = (state) => {
    return {
        visible: state.navigation === PAGEVIEW_SEARCH_RESULTS,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const ResultPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageView);

export default ResultPage;