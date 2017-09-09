import React from 'react';
import NavigationComponent from '../components/Navigation';
import { connect } from 'react-redux';
import {showFileUploadPage, showIndexPage, showResultPage, login, logout} from '../actions';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.logged_in,
        cssStyle: state.logged_in ? 'login' : 'index'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showFileUploadPage: () => {
            dispatch(showFileUploadPage());
        },
        login: () => {
            dispatch(login());
            dispatch(showResultPage());
        },
        logout: () => {
            dispatch(logout());
            dispatch(showIndexPage());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationComponent);