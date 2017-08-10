export const PAGEVIEW_SEARCH_RESULTS = 'PAGEVIEW_SEARCH_RESULTS';
export const showResultPage = () => {
    return {
        type: PAGEVIEW_SEARCH_RESULTS,
    }
};

export const PAGEVIEW_FILE_UPLOAD = 'PAGEVIEW_FILE_UPLOAD';
export const showFileUploadPage = () => {
    return {
        type: PAGEVIEW_FILE_UPLOAD,
    }
};
