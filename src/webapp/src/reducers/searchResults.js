import {SEARCH_INPUT_KEY_PRESSED, SEARCH_DOCUMENTS, RECEIVE_DOCUMENTS, RECEIVE_DOCUMENTS_ERROR} from '../actions';

export const searchResults = (state = {isFetching: false, didInvalidate: false, documents: []}, action) => {
    switch (action.type) {
        case SEARCH_INPUT_KEY_PRESSED:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case SEARCH_DOCUMENTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_DOCUMENTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                documents: action.documents,
                lastUpdated: action.receivedAt
            });
        case RECEIVE_DOCUMENTS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                documents: []
            });
        default:
            return state;
    }
};