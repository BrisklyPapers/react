import React from 'react';
import Radium from 'radium';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';

class InputTag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            tag: "",
            count: 0
        }
    };

    render() {
        return (
            <div
                style={styles.wrapper}
            >
                {this.state.tags.map((tag) =>
                    <Chip
                        key={tag.key}
                        onRequestDelete={() => this.handleRequestDelete(tag.key)}
                        style={styles.base}
                    >
                        {tag.label}
                    </Chip>
                )}
                <TextField
                    hintText="Enter tag, press Enter"
                    value={this.state.tag}
                    onChange={this.onInputChange.bind(this)}
                    onKeyPress={this.onInputKeyPress.bind(this)}
                    ref={input => this.inputElement = input}
                    style={styles.input}
                />
            </div>
        );
    };

    handleRequestDelete = (key) => {
        let tags = this.state.tags;
        const tagToDelete = tags.map((tag) => tag.key).indexOf(key);
        tags.splice(tagToDelete, 1);
        this.setState({tags});
    };

    onInputChange = (e) => {
        this.setState({
            tag: e.target.value
        })
    };

    onInputKeyPress = (e) => {
        if (e.key === 'Enter' && '' !== e.target.value) {
            let tags = this.state.tags;
            tags.push({
                key: this.state.count + 1,
                label: e.target.value
            });
            this.setState({
                tags: tags,
                tag: '',
                count: this.state.count + 1
            });

            this.props.storeCallback(tags);
        }
    };
}

var styles = {
    base: {
        margin: 4,
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