import React from 'react';
import Search from '../containers/Search';
import SearchResults from '../containers/SearchResults';
import DropZone from '../containers/DropZone';

const App = () => (
    <div>
        <Search />
        <SearchResults />
        <DropZone />
    </div>
);

export default App;