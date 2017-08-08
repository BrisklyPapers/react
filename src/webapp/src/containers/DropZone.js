import React from 'react';
import Radium from 'radium';
import FileDrop from '../components/FileDrop';
import InputTag from '../components/InputTag';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {storeDocuments, fileDropped} from '../actions';

class DropZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState()
    };

    getInitialState = () => {
        return {
            tag: "",
            tags: [],
            files: []
        };
    };

    render() {
        return (
            <div>
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
                <RaisedButton
                    label="Upload"
                    primary={true}
                    style={styles.button}
                    onClick={this.uploadFiles}
                />
            </div>
        );
    };

    onDrop = (files) => {
        let cFiles = this.state.files;
        for (var i = 0; i < files.length; i++) {
            cFiles.push(files[i]);
        }
        this.setState({files: cFiles});
        this.props.dropFiles(files);
    };

    addTag = (tag) => {
        let tags = this.state.tags;
        tags.push(tag);
        this.setState({tags: tags});
    };

    deleteTag = (key) => {
        let tags = this.state.tags;
        const tagToDelete = tags.map((tag) => tag.key).indexOf(key);
        tags.splice(tagToDelete, 1);
        this.setState({tags: tags});
    };

    changeTag = (value) => {
        this.setState({tag: value});
    };

    uploadFiles = () => {
        this.props.storeDocuments(this.state.files, this.state.tags);
        this.setState(this.getInitialState());
    }
}

DropZone.propTypes = {
    storeDocuments: PropTypes.func.isRequired
};

var styles = {
    button: {
        marginTop: 12,
    }
};

DropZone = Radium(DropZone);

const mapStateToProps = (state) => {
    return {
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

DropZone = connect(
    mapStateToProps,
    mapDispatchToProps
)(DropZone);

export default DropZone;