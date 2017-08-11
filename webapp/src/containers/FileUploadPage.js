import { connect } from 'react-redux';
import PageView from '../components/PageView';
import {PAGEVIEW_FILE_UPLOAD} from '../actions'

const mapStateToProps = (state) => {
    return {
        visible: state.navigation === PAGEVIEW_FILE_UPLOAD,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const FileUploadPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageView);

export default FileUploadPage;