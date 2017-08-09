import $ from 'jquery';

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

        $.each(files, function (i, file) {
            formData.append('files[]', file);
        });

        $.each(tags, function (i, tag) {
            formData.append("tags[" + tag.key + "]", tag.label);
        });

        formData.append('action', 'upload');

        dispatch(fileStartUpload());

        return $.ajax({
            //xhr: function()
            //{
            //    var xhr = new window.XMLHttpRequest();
            //    //Upload progress
            //    xhr.upload.addEventListener("progress", function(evt){
            //        if (evt.lengthComputable) {
            //            dispatch(fileUploadProgress(evt.loaded / evt.total));
            //        }
            //    }, false);
            //    //Download progress
            //    xhr.addEventListener("progress", function(evt){
            //        if (evt.lengthComputable) {
            //            dispatch(fileDownloadProgress(evt.loaded / evt.total));
            //        }
            //    }, false);
            //    return xhr;
            //},
            url: 'http://localhost:8085/document',
            data: formData,
            type: "POST",
            contentType: false,
            processData: false,
            crossDomain: true,
            //beforeSend: (xhr) => {
            //    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            //},
            success: function (jqXHR, textStatus) {
                dispatch(documentsStored({}));
            },
            error: function (jqXHR, textStatus) {
                dispatch(documentsNotStored(textStatus));
            }
        });
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
const documentsNotStored = (textStatus) => {
    return {
        type: DOCUMENTS_NOT_STORED,
        documents: [],
        receivedAt: Date.now(),
        textStatus
    }
};
