import { combineReducers } from 'redux'
import {searchedText, searchResults} from './search'

const rootReducer = combineReducers({
    searchedText,
    searchResults
});

export default rootReducer
