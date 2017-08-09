import {combineReducers} from 'redux';
import {searchedText} from './searchedText';
import {searchResults} from './searchResults';
import {droppedFiles} from './droppedFiles';
import {uploading} from './uploading';

const rootReducer = combineReducers({
    searchedText,
    searchResults,
    droppedFiles,
    uploading
});

export default rootReducer
