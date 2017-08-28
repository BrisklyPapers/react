import fetch from 'isomorphic-fetch';

export const SEARCH_INPUT_KEY_PRESSED = 'SEARCH_INPUT_KEY_PRESSED';
export const searchInputKeyPressed = (text) => {
    return {
        type: SEARCH_INPUT_KEY_PRESSED,
        text
    }
};

export const SEARCH_DOCUMENTS = 'SEARCH_DOCUMENTS';
export const searchDocuments = (text) => {
    return {
        type: SEARCH_DOCUMENTS,
        text
    }
};

export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS';
const receiveDocuments = (json) => {
    return {
        type: RECEIVE_DOCUMENTS,
        documents: json.map ? json : [],
        receivedAt: Date.now()
    }
};

export const RECEIVE_DOCUMENTS_ERROR = 'RECEIVE_DOCUMENTS_ERROR';
const receiveDocumentsError = () => {
    return {
        type: RECEIVE_DOCUMENTS_ERROR,
        documents: [],
        receivedAt: Date.now()
    }
};

export const fetchDocuments = (text) => {

    return function (dispatch) {

        dispatch(searchDocuments(text))

        return fetch(`/ajax/document/search?q=${text}`)
            .then(
                response => response.json(),
                error => dispatch(receiveDocumentsError())
            )
            .then(json =>
                dispatch(receiveDocuments(json))
            )
    }
};

export const fetchDocumentsIfNeeded = (text) => {

    return (dispatch, getState) => {
        if (1 /* TODO enter Delay */) {
            return dispatch(fetchDocuments(text))
        } else {
            return Promise.resolve()
        }
    }
};