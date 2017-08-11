import {FILE_DROP, DOCUMENTS_STORED, DOCUMENTS_NOT_STORED} from '../actions';

export const droppedFiles = (state = {}, action) => {
    switch (action.type) {
        case FILE_DROP:
            return [
                ...state,
                {
                    name: action.document.name,
                    size: action.document.size,
                    lastModified: action.document.lastModified,
                    type: action.document.type
                }
            ];
        case DOCUMENTS_STORED:
            return {};
        case DOCUMENTS_NOT_STORED:
            return {};
        default:
            return state;
    }
};