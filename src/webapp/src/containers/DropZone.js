import { connect } from 'react-redux';
import { DropZoneped } from '../actions';
import DropZoneComponent from '../components/DropZone';
import {storeDocuments} from '../actions';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        storeDocuments: (files, tags) => {
            dispatch(storeDocuments(files, tags));
        }
    };
};

const DropZone = connect(
    mapStateToProps,
    mapDispatchToProps
)(DropZoneComponent);

export default DropZone;