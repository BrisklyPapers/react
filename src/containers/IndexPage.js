import { connect } from 'react-redux';
import PageView from '../components/PageView';
import {PAGEVIEW_INDEX} from '../actions'

const mapStateToProps = (state) => {
    return {
        visible: state.navigation === PAGEVIEW_INDEX,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageView);