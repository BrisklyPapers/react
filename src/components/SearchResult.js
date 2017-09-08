import React from 'react';
import Radium, {Style} from 'radium';
import PropTypes from   'prop-types';


class SearchResult extends React.Component {
    render () {
        return (
            <div>
                <Style scopeSelector="em" rules={{backgroundColor: 'yellow'}} />
                <a title={this.props.title} href={this.props.url} target="_blank">{this.props.title}</a>
                <br/>
                <div dangerouslySetInnerHTML={{__html: this.props.description}}/>
            </div>
        );
    }
};

SearchResult.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

SearchResult = Radium(SearchResult);

export default SearchResult;