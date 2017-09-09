import {combineReducers} from 'redux';
import {searchedText} from './searchedText';
import {searchResults} from './searchResults';
import {droppedFiles} from './droppedFiles';
import {uploading} from './uploading';
import {upload_error} from './upload_error';
import {navigation} from './navigation';
import {logged_in} from './logged_in';

export {combineReducers} from 'redux';
export {searchedText} from './searchedText';
export {searchResults} from './searchResults';
export {droppedFiles} from './droppedFiles';
export {uploading} from './uploading';
export {upload_error} from './upload_error';
export {navigation} from './navigation';
export {logged_in} from './logged_in';

const rootReducer = combineReducers({
    searchedText,
    searchResults,
    droppedFiles,
    uploading,
    upload_error,
    navigation,
    logged_in
});

export default rootReducer
