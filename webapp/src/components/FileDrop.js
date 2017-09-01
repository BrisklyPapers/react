import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

class FileDrop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dragState: "",
        }
    };

    render() {
        return (
            <div>
                <div
                    onDragOver={ this.dragOver }
                    onDragEnd={ this.dragLeave }
                    onDragLeave={ this.dragLeave }

                    onDrop={ this.onDrop }
                    onClick={ this.onClick }

                    style={[
                        styles.base,
                        styles[this.state.dragState]
                    ]}
                >
                    Drop files here or click to <span id="browse">browse</span>.
                    <input
                        id="fileBox"
                        type="file"
                        name="files[]"
                        multiple

                        style={[styles.fileBox]}

                        ref={input => this.inputElement = input}

                        onChange={ this.onDrop }
                    />
                </div>
                <ul>
                    {this.props.files.map((file) =>
                        <li key={file.name}>{file.name}</li>
                    )}
                </ul>
            </div>
        );
    };

    cancelEvent(e) {
        e = e || window.event; // get window.event if e argument missing (in IE)
        if (e.preventDefault) {
            e.preventDefault();
        }
    };

    dragOver(e) {
        this.cancelEvent(e);
        this.setState({dragState: "hover"});
        return false;
    };

    dragLeave(e) {
        this.cancelEvent(e);
        this.setState({dragState: ""});
        return false;
    };

    onDrop(e) {
        this.dragLeave(e);

        let files = [];
        if (e.dataTransfer) {
            const dt = e.dataTransfer;
            if (dt.files && dt.files.length) {
                files = dt.files
            } else if (dt.items && dt.items.length) {
                files = dt.items
            }
        }  else if (e.target && e.target.files) {
            files = e.target.files
        }

        this.props.dropFiles(files);

        return false;
    };

    onClick(e) {
        this.inputElement.click();
    };
}

FileDrop.propTypes = {
    dropFiles: PropTypes.func.isRequired,
    files: PropTypes.array.isRequired
};

var styles = {
    base: {
        border: "1px dashed #ccc",
        padding: "10px",
        minHeight: "100px"
    },
    hover: {
        border: "2px dashed rgb(0, 188, 212)"
    },
    fileBox: {
        display: "none"
    }
};

FileDrop = Radium(FileDrop);

export default FileDrop;