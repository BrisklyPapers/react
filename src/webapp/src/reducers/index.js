import { combineReducers } from 'redux'
import {searchedText} from './searchedText'
import {searchResults} from './searchResults'

const rootReducer = combineReducers({
    searchedText,
    searchResults
});

export default rootReducer
