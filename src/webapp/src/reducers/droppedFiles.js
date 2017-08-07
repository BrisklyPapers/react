import {FILE_DROP} from '../actions';

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
        default:
            return state;
    }
};