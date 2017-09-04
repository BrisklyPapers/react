import React from 'react';
import Search from '../containers/Search';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import {showFileUploadPage} from '../actions';

class Navigation extends React.Component {
    render () {
        return (
            <div style={{marginBottom: "20px"}}>
                <Toolbar style={{backgroundColor: "white"}}>
                    <ToolbarGroup firstChild={true}>
                        <ToolbarTitle text="Briskly Papers"/>
                        <Search />
                        <FlatButton
                            id="upload"
                            label="Upload files"
                            secondary={true}
                            onClick={this.props.showFileUploadPage}
                        />
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true}>
                        <FlatButton
                            id="login"
                            label="Login"
                            secondary={true}
                            disabled={true}
                        />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
};

Navigation.propTypes = {
};


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showFileUploadPage: () => {
            dispatch(showFileUploadPage());
        },
    };
};

Navigation = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);


export default Navigation;