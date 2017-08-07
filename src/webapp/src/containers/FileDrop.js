import { connect } from 'react-redux';
import { fileDropped } from '../actions';
import FileDropComponent from '../components/FileDrop';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dropFiles: (files) => {
            for (var i = 0; i < files.length; i++) {
                dispatch(fileDropped(files[i]));
            }
        }
    };
};

const FileDrop = connect(
    mapStateToProps,
    mapDispatchToProps
)(FileDropComponent);

export default FileDrop;