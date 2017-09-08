import React from 'react'
import PropTypes from 'prop-types'

class PageView extends React.Component {
    render() {
        return (
        <div>
        {this.props.visible &&
            this.props.children
        }
        </div>
        )
    }
}

PageView.propTypes = {
    visible: PropTypes.bool.isRequired
};

export default PageView;