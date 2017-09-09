import React from 'react';
import IndexPage from '../containers/IndexPage';
import Radium from 'radium';
import {connect} from 'react-redux';

class IndexPageHead extends React.Component {
    render() {
        return (
            <IndexPage>
                <div style={styles.divHeader}>
                    <h1 style={styles.h1}>
                        Organize your paperwork with ease
                    </h1>
                    <p style={styles.p}>
                        Briskly Papers helps you to archive and find your documents as simple as never before
                    </p>
                </div>
            </IndexPage>
        )
    };
}

var styles = {
    divHeader: {
        position: "absolute",
        width: "100%",
        top: "14%",
        textAlign: "center"
    },
    h1: {
        fontSize: "53px",
        fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
        fontWeight: 100,
        letterSpacing: "-1px",
        margin: 0
    },
};

export default Radium(IndexPageHead);