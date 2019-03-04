import React from 'react';
import IndexPage from '../containers/IndexPage';
import Radium from 'radium';

class IndexPageDescription extends React.Component {
    render() {
        return (
            <IndexPage>
                <div style={styles.promotion}>
                    <h2 style={styles.h2}>Document Management System</h2>
                    <p style={styles.p}>
                        Briskly Papers is a document management system. It's goal is to provide an easy and fast access to all your files.
                    </p>
                </div>
                <div style={styles.promotion}>
                    <h2 style={styles.h2}>Store your documents per Drag & Drop</h2>
                    <p style={styles.p}>
                        Select your file, move them to our Upload Area, click upload. Done
                    </p>
                </div>
                <div style={styles.promotion}>
                    <h2 style={styles.h2}>Tag your documents</h2>
                    <p style={styles.p}>
                        Create tags to define groups for your documents. You can find all relevant documents with one
                        click.
                    </p>
                </div>
                <div style={styles.promotion}>
                    <h2 style={styles.h2}>Save websites for offline usage</h2>
                    <p style={styles.p}>
                        You want to remember a great website? Enter the URL, click save and find the information
                        whenever you need it. Even offline, with our PDF creator!
                    </p>
                </div>
                <div style={styles.promotion}>
                    <h2 style={styles.h2}>Your documents are secure</h2>
                    <p style={styles.p}>
                        All documents are stored encrypted. The files can only be decrypted with your password.
                    </p>
                </div>
                <div style={styles.promotion}>
                    <h2 style={styles.h2}>Full text search</h2>
                    <p style={styles.p}>
                        Each document can be parsed and indexed. You are able to find relevant documents by tag, file name or file content
                    </p>
                </div>
            </IndexPage>
        )
    };
}

var styles = {
    h2: {
        fontSize: "34px",
        fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
        fontWeight: 100,
        letterSpacing: "-1px",
        margin: 0
    },
    p: {
        fontSize: "17px",
        fontFamily: "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif",
        letterSpacing: "0.06vmax",
        margin: "2.6vh 0 6vh",
    },
    promotion: {
        width: "40vw",
        color: "rgba(0, 0, 0, 0.4)",
        margin: "75px"
    }
};

export default Radium(IndexPageDescription);