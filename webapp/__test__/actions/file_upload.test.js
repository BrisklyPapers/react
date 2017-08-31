import {
    fileDropped, FILE_DROP,
    fileStartUpload, FILE_START_UPLOAD,
    storeDocuments, DOCUMENTS_STORED, DOCUMENTS_NOT_STORED
} from '../../src/actions/file_upload.js';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions/fileDropped', () => {
    it('returns dropped document', () => {
        expect(
            fileDropped({body: "test"})
        ).toEqual({
            type: FILE_DROP,
            document: {body: "test"}
        });
    });
});

describe('actions/fileStartUpload', () => {
    it('returns FILE_START_UPLOAD', () => {
        expect(
            fileStartUpload("test")
        ).toEqual({
            type: FILE_START_UPLOAD
        });
    })
});

describe('actions/storeDocuments', () => {
    let store, myMock;

    beforeEach(() => {
        const now = Date.now();
        Date.now = jest.genMockFunction().mockReturnValue(now);

        store = mockStore({});
    });

    afterEach(() => {
        myMock.restore();
    });

    it('stores given document and returns file information', () => {
        const mockResult = [
            {fileName: "foo.pdf"}
        ];
        myMock = fetchMock.post('/ajax/document', mockResult);

        const files = ['foo'];
        const tags = [{key: 1, label: 't1'}, {key: 2, label: 't2'}];

        let formData = new FormData();
        formData.append('files[]', 'foo');
        formData.append('tags[1]', 't1');
        formData.append('tags[2]', 't2');
        formData.append('action', 'upload');

        return store.dispatch(storeDocuments(files, tags))
            .then(() => {
                expect(myMock.called('/ajax/document')).toBe(true);
                const options = myMock.lastOptions('/ajax/document');

                expect(options).toHaveProperty('method');
                expect(options.method).toBe("POST");
                expect(options).toHaveProperty('body');
                expect(options.body.get('files[]')).toEqual('foo');
                expect(options.body.get('tags[1]')).toEqual('t1');
                expect(options.body.get('tags[2]')).toEqual('t2');
                expect(options.body.get('action')).toEqual('upload');

                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(2);
                expect(expectedActions).toContainEqual({
                    type: FILE_START_UPLOAD
                });
                expect(expectedActions).toContainEqual({
                    type: DOCUMENTS_STORED,
                    documents: mockResult,
                    receivedAt: Date.now()
                });
            });
    });


    it('returns an invalid response', () => {
        myMock = fetchMock.post('/ajax/document', 401);

        return store.dispatch(storeDocuments([], []))
            .then(() => {
                expect(myMock.called('/ajax/document')).toBe(true);

                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(2);
                expect(expectedActions).toContainEqual({
                    type: FILE_START_UPLOAD
                });
                expect(expectedActions).toContainEqual({
                    type: DOCUMENTS_NOT_STORED,
                    documents: [],
                    receivedAt: Date.now()
                });
            });
    });

    it('returns DOCUMENTS_NOT_STORED if ajax response is not valid json', () => {
        myMock = fetchMock.post('/ajax/document', "invalid json");

        return store.dispatch(storeDocuments([], []))
            .then(() => {
                expect(myMock.called('/ajax/document')).toBe(true);

                const expectedActions = store.getActions();
                expect(expectedActions).toContainEqual({
                    type: DOCUMENTS_NOT_STORED,
                    documents: [],
                    receivedAt: Date.now()
                });
            });
    });
});