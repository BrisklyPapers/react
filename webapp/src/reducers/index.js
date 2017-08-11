import {combineReducers} from 'redux';
import {searchedText} from './searchedText';
import {searchResults} from './searchResults';
import {droppedFiles} from './droppedFiles';
import {uploading} from './uploading';
import {upload_error} from './upload_error';
import {navigation} from './navigation';

const rootReducer = combineReducers({
    searchedText,
    searchResults,
    droppedFiles,
    uploading,
    upload_error,
    navigation
});

export default rootReducer
