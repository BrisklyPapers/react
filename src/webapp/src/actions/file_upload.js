import $ from 'jquery';

export const FILE_DROP = 'FILE_DROP';
export const fileDropped = (document) => {
    return {
        type: FILE_DROP,
        document
    }
};

export const FILE_BUFFER_FILE = 'FILE_BUFFER_FILE';
export const fileBufferFile = (document) => {
    return {
        type: FILE_BUFFER_FILE,
        document
    }
};

export const FILE_UPLOAD_CLICKED = 'FILE_UPLOAD_CLICKED';
export const fileUploadClicked = () => {
    return {
        type: FILE_UPLOAD_CLICKED
    }
};

export const FILE_BOX_CHANGED = 'FILE_BOX_CHANGED';
export const fileBoxChanged = (documents) => {
    return {
        type: FILE_BOX_CHANGED,
        documents
    }
};

export const FILE_START_UPLOAD = 'FILE_START_UPLOAD';
export const fileStartUpload = (documents) => {
    return {
        type: FILE_START_UPLOAD,
        documents
    }
};

export const FILE_UPLOAD_FINISHED = 'FILE_UPLOAD_FINISHED';
export const fileUploadFinished = (documents) => {
    return {
        type: FILE_UPLOAD_FINISHED,
        documents
    }
};


export const storeDocuments = (files, tags) => {

    return function (dispatch) {
        var formData = new FormData();

        $.each(files, function (i, file) {
            formData.append('files[]', file);
        });

        $.each(tags, function (i, tag) {
            formData.append("tags[" + tag.key + "]", tag.label);
        });

        formData.append('action', 'upload');

        return $.ajax({
            url: '  http://localhost:8085/document',
            data: formData,
            type: "post",
            contentType: false,
            processData: false,
            success: function (jqXHR, textStatus) {
                dispatch(documentsStored({}));
            },
            error: function (jqXHR, textStatus) {
                dispatch(documentsNotStored({}));
            }
        })
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
