import {PAGEVIEW_SEARCH_RESULTS, PAGEVIEW_FILE_UPLOAD} from '../actions';

export const navigation = (state = PAGEVIEW_SEARCH_RESULTS, action) => {
    switch (action.type) {
        case PAGEVIEW_SEARCH_RESULTS:
        case PAGEVIEW_FILE_UPLOAD:
            return action.type;
        default:
            return state;
    }
};