import {PAGEVIEW_SEARCH_RESULTS, PAGEVIEW_FILE_UPLOAD, PAGEVIEW_INDEX} from '../actions';

export const navigation = (state = PAGEVIEW_INDEX, action) => {
    switch (action.type) {
        case PAGEVIEW_INDEX:
        case PAGEVIEW_SEARCH_RESULTS:
        case PAGEVIEW_FILE_UPLOAD:
            return action.type;
        default:
            return state;
    }
};