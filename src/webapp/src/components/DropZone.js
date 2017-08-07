import React from 'react';
import Radium from 'radium';
import FileDrop from '../containers/FileDrop';
import InputTag from '../containers/InputTag';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

class DropZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            files: []
        }
    };

    render() {
        return (
            <div>
                <FileDrop
                    storeCallback={ this.storeFiles }
                />
                <InputTag
                    storeCallback={ this.storeTags }
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

    storeTags = (tags) => {
        this.setState({tags: tags});
    };

    storeFiles = (files) => {
        this.setState({files: files});
    };

    uploadFiles = () => {
        this.props.storeDocuments(this.state.files, this.state.tags);
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

export default DropZone;