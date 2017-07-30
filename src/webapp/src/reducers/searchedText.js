import {SEARCH_INPUT_KEY_PRESSED} from '../actions'

export const searchedText = (state = '', action) => {
    switch (action.type) {
        case SEARCH_INPUT_KEY_PRESSED:
            return action.text
        default:
            return state
    }
}