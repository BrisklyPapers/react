import {combineReducers} from 'redux';
import {searchedText} from './searchedText';
import {searchResults} from './searchResults';
import {droppedFiles} from './droppedFiles';

const rootReducer = combineReducers({
    searchedText,
    searchResults,
    droppedFiles
});

export default rootReducer
