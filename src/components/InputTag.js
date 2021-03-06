import React from 'react';
import Radium from 'radium';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class InputTag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.handleRequestDelete = this.handleRequestDelete.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputKeyPress = this.onInputKeyPress.bind(this);
    };

    render() {
        return (
            <MuiThemeProvider>
                <div
                    style={styles.wrapper}
                >
                    {this.props.tags.map((tag) =>
                        <Chip
                            key={tag.key}
                            onRequestDelete={() => this.handleRequestDelete(tag.key)}
                            style={styles.base}
                        >
                            {tag.label}
                        </Chip>
                    )}
                    <TextField
                        id="search"
                        hintText="Enter tag, press Enter"
                        value={this.props.tag}
                        onChange={this.onInputChange}
                        onKeyPress={this.onInputKeyPress}
                        ref={input => this.inputElement = input}
                        style={styles.input}
                    />
                </div>
            </MuiThemeProvider>
        );
    };

    handleRequestDelete(key) {
        this.props.deleteTag(key);
    };

    onInputChange(e) {
        this.props.changeTag(e.target.value);
    };

    onInputKeyPress(e) {
        if (e.key === 'Enter' && '' !== e.target.value) {
            this.props.addTag({
                key: this.state.count + 1,
                label: e.target.value
            });
            this.props.changeTag("");

            this.setState({
                count: this.state.count + 1
            });
        }
    };
}


InputTag.propTypes = {
    addTag: PropTypes.func.isRequired,
    deleteTag: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    changeTag: PropTypes.func.isRequired,
    tag: PropTypes.string.isRequired
};

var styles = {
    base: {
        margin: 6,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        height: '42px'
    }
};

InputTag = Radium(InputTag);

export default InputTag;