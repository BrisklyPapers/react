import {FILE_START_UPLOAD, DOCUMENTS_STORED, DOCUMENTS_NOT_STORED} from '../actions';

export const uploading = (state = false, action) => {
    switch (action.type) {
        case FILE_START_UPLOAD:
            return true;
        case DOCUMENTS_STORED:
            return false;
        case DOCUMENTS_NOT_STORED:
            return false;
        default:
            return state;
    }
};