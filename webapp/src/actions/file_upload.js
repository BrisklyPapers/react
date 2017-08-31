export const FILE_DROP = 'FILE_DROP';
export const fileDropped = (document) => {
    return {
        type: FILE_DROP,
        document
    }
};

export const FILE_START_UPLOAD = 'FILE_START_UPLOAD';
export const fileStartUpload = () => {
    return {
        type: FILE_START_UPLOAD
    }
};

export const storeDocuments = (files, tags) => {

    return function (dispatch) {
        var formData = new FormData();

        files.forEach((file) => {
            formData.append('files[]', file);
        });
        tags.forEach((tag, i) => {
            formData.append("tags[" + tag.key + "]", tag.label);
        });

        formData.append('action', 'upload');

        dispatch(fileStartUpload());

        return fetch('/ajax/document', {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(json => dispatch(documentsStored(json)))
            .catch(error => dispatch(documentsNotStored()));
    }
};

export const DOCUMENTS_STORED = 'DOCUMENTS_STORED';
const documentsStored = (json) => {
    return {
        type: DOCUMENTS_STORED,
        documents: json.map ? json : [],
        receivedAt: Date.now()
    }
};

export const DOCUMENTS_NOT_STORED = 'DOCUMENTS_NOT_STORED';
const documentsNotStored = () => {
    return {
        type: DOCUMENTS_NOT_STORED,
        documents: [],
        receivedAt: Date.now()
    }
};
