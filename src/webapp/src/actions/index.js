import fetch from 'isomorphic-fetch'

export const SEARCH_INPUT_KEY_PRESSED = 'SEARCH_INPUT_KEY_PRESSED';
export function searchInputKeyPressed(text) {
    return {
        type: SEARCH_INPUT_KEY_PRESSED,
        text
    }
}

export const SEARCH_DOCUMENTS = 'SEARCH_DOCUMENTS';
export function searchDocuments(text) {
    return {
        type: SEARCH_DOCUMENTS,
        text
    }
}

export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS';
function receiveDocuments(json) {
    console.log(json.data);
    return {
        type: RECEIVE_DOCUMENTS,
        documents: [], //json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export const RECEIVE_DOCUMENTS_ERROR = 'RECEIVE_DOCUMENTS_ERROR';
function receiveDocumentsError(json) {
    return {
        type: RECEIVE_DOCUMENTS_ERROR,
        documents: [],
        receivedAt: Date.now()
    }
}

// store.dispatch(fetchPosts())
export function fetchDocuments(text) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function (dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(searchDocuments(text))

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch(`http://localhost:8085/document/search?q=${text}`)
            .then(
                response => response.json(),
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing an loop of 'Unexpected batch number' errors.
                // https://github.com/facebook/react/issues/6895
                error => console.log('An error occured.', error)
            )
            .then(json =>
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.

                dispatch(receiveDocuments(json))
            )
    }
}

export function fetchDocumentsIfNeeded(text) {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.

    // This is useful for avoiding a network request if
    // a cached value is already available.

    return (dispatch, getState) => {
        if (1) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchDocuments(text))
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}