import {FILE_START_UPLOAD, DOCUMENTS_STORED, DOCUMENTS_NOT_STORED} from '../actions';

export const upload_error = (state = {error: false, errorMessage: ""}, action) => {
    switch (action.type) {
        case FILE_START_UPLOAD:
            return {error: false, errorMessage: ""};
        case DOCUMENTS_STORED:
            return {error: false, errorMessage: ""};
        case DOCUMENTS_NOT_STORED:
            return {error: true, errorMessage: "FileUpload: Could not upload files. Try again"};
        default:
            return state;
    }
};