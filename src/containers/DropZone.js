import React from 'react';
import Radium from 'radium';
import FileDrop from '../components/FileDrop';
import InputTag from '../components/InputTag';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {storeDocuments, fileDropped} from '../actions';

export class DropZoneComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();

        this.onDrop = this.onDrop.bind(this);
        this.addTag = this.addTag.bind(this);
        this.deleteTag = this.deleteTag.bind(this);
        this.changeTag = this.changeTag.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.componentWillUpdate = this.componentWillUpdate.bind(this);
    };

    getInitialState() {
        return {
            tag: "",
            tags: [],
            files: [],
            completed: false
        };
    };

    render() {
        return (
            <div>
                <Snackbar
                    open={this.props.error}
                    message={this.props.errorMessage}
                    autoHideDuration={3000}
                    bodyStyle={{backgroundColor: '#D32F2F'}}
                    title="Error"
                />
                <FileDrop
                    dropFiles={ this.onDrop }
                    files={this.state.files}
                />
                <InputTag
                    addTag={ this.addTag }
                    deleteTag={ this.deleteTag }
                    changeTag={ this.changeTag }
                    tags={this.state.tags}
                    tag={this.state.tag}
                />
                {this.props.uploading &&
                <LinearProgress mode="indeterminate" value={this.props.completed}/>
                }
                <RaisedButton
                    label="Upload"
                    primary={true}
                    style={styles.button}
                    onClick={this.uploadFiles}
                    disabled={this.props.uploading}
                  />
            </div>
        );
    };

    onDrop(files) {
        let cFiles = this.state.files;
        for (var i = 0; i < files.length; i++) {
            cFiles.push(files[i]);
        }
        this.setState({files: cFiles});
        this.props.dropFiles(files);
    };

    addTag(tag) {
        let tags = this.state.tags;
        tags.push(tag);
        this.setState({tags: tags});
    };

    deleteTag(key) {
        let tags = this.state.tags;
        const tagToDelete = tags.map((tag) => tag.key).indexOf(key);
        if(0 <= tagToDelete) {
            tags.splice(tagToDelete, 1);
            this.setState({tags: tags});
        }
    };

    changeTag(value) {
        this.setState({tag: value});
    };

    uploadFiles() {
        if (this.state.files.length) {
            this.props.storeDocuments(this.state.files, this.state.tags);
        }
    };

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.uploading === false && nextProps.error === false && this.props.uploading === true) {
            this.setState(this.getInitialState());
        }
    };
}

DropZoneComponent.propTypes = {
    storeDocuments: PropTypes.func.isRequired,
    dropFiles: PropTypes.func.isRequired,
    uploading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired
};

var styles = {
    button: {
        marginTop: 12,
    },
    card: {
        color: "red",
    }
};

DropZoneComponent = Radium(DropZoneComponent);

const mapStateToProps = (state) => {
    return {
        uploading: state.uploading,
        error: state.upload_error.error,
        errorMessage: state.upload_error.errorMessage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        storeDocuments: (files, tags) => {
            dispatch(storeDocuments(files, tags));
        },
        dropFiles: (files) => {
            for (var i = 0; i < files.length; i++) {
                dispatch(fileDropped(files[i]));
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DropZoneComponent);