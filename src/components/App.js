import React from 'react';
import Navigation from '../containers/Navigation';
import IndexPage from '../containers/IndexPage';
import ResultPage from '../containers/ResultPage';
import FileUploadPage from '../containers/FileUploadPage';
import SearchResults from '../containers/SearchResults';
import DropZone from '../containers/DropZone';
import IndexPageHead from './IndexPageHead';
import IndexPageDescription from './IndexPageDescription';
import Radium from 'radium';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.divOnTop[this.props.cssStyle]}>
                    <Navigation />
                    <IndexPageHead />
                    <ResultPage>
                        <SearchResults />
                    </ResultPage>
                    <FileUploadPage>
                        <DropZone />
                    </FileUploadPage>
                </div>
                <IndexPageDescription />
            </div>
        )
    };
}

var styles = {
    divOnTop: {
        index: {
            backgroundImage: 'url("/home_background_1920cs.jpg")',
            height: "100vh",
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
            position: "relative"
        },
        login: {
            backgroundImage: 'url("/login_background_1920x420.jpg")',
            minHeight: "100vh",
            height: "100%",
            backgroundSize: '100% 1px',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'repeat-y',
            position: "relative"
        }
    }
};

export default Radium(App);