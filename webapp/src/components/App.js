import React from 'react';
import Navigation from '../components/Navigation';
import ResultPage from '../containers/ResultPage';
import FileUploadPage from '../containers/FileUploadPage';
import SearchResults from '../containers/SearchResults';
import DropZone from '../containers/DropZone';

const App = () => (
    <div>
        <Navigation />
        <ResultPage>
            <SearchResults />
        </ResultPage>
        <FileUploadPage>
            <DropZone />
        </FileUploadPage>
    </div>
);

export default App;