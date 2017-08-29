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

    return (dispatch) => {

        dispatch(searchDocuments(text));

        return fetch(`/ajax/document/search?q=${text}`)
            .then(response => response.json())
            .then(json => dispatch(receiveDocuments(json)))
            .catch(error => dispatch(receiveDocumentsError()))
    }
};

export const fetchDocumentsIfNeeded = (text) => {

    return (dispatch, getState) => {
        return dispatch(fetchDocuments(text))
    }
};