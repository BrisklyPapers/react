import React from 'react';
import Search from '../containers/Search';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import Radium from 'radium';

class Navigation extends React.Component {
    render () {
        return (
            <div style={styles.div[this.props.cssStyle]}>
                <Toolbar style={{backgroundColor: "transparent", marginLeft: "15vw"}}>
                    <ToolbarGroup firstChild={true}>
                        {this.props.loggedIn &&
                            <Search />
                        }
                        {this.props.loggedIn &&
                            <FlatButton
                                id="upload"
                                label="Upload files"
                                secondary={true}
                                onClick={this.props.showFileUploadPage}
                            />
                        }
                    </ToolbarGroup>
                    {!this.props.loggedIn &&
                    <ToolbarGroup lastChild={true}>
                        <FlatButton
                            id="signup"
                            label="Sign Up"
                            secondary={true}
                        />
                        <FlatButton
                            id="login"
                            label="Log In"
                            secondary={true}
                            onClick={this.props.login}
                        />
                    </ToolbarGroup>
                    }
                    {this.props.loggedIn &&
                    <ToolbarGroup lastChild={true}>
                        <FlatButton
                            id="logout"
                            label="Log Out"
                            secondary={true}
                            onClick={this.props.logout}
                        />
                    </ToolbarGroup>
                    }
                </Toolbar>
            </div>
        );
    }
}

Navigation.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    cssStyle: PropTypes.string.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    showFileUploadPage: PropTypes.func.isRequired
};

var styles = {
    div: {
        index: {
            position: "absolute",
            width: "100%"
        },
        login: {
            marginBottom: "20px"
        }
    }
};

export default Radium(Navigation);