import React from 'react';
import DropZone, {DropZoneComponent} from '../../src/containers/DropZone';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import dependency, {FILE_DROP} from '../../src/actions';

jest.mock('../../src/actions', () => ({
    storeDocuments: jest.fn().mockImplementation(() => 'result of storeDocuments'),
    fileDropped: jest.fn().mockImplementation(() => 'result of fileDropped')
}));

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mockStore = configureMockStore();

describe('containers/DropZone', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({uploading: false, upload_error: {error: false, errorMessage: ""}});
        store.dispatch = spy();
    });

    describe('default rendering', () => {
        it('renders correctly', () => {
            const renderer = new ShallowRenderer();
            renderer.render(
                <DropZone store={store} />
            );
            expect(renderer.getRenderOutput()).toMatchSnapshot();
        });

        it('maps state and dispatch to props', () => {
            wrapper = shallow(<DropZone store={store} />);
            expect(wrapper.props()).toEqual(expect.objectContaining ({
                uploading: expect.any(Boolean),
                error: expect.any(Boolean),
                errorMessage: expect.any(String),
                storeDocuments: expect.any(Function),
                dropFiles: expect.any(Function)
            }));
        });
    });

    describe('rendering', () => {

        beforeEach(() => {
            wrapper = renderer.create(
                <MuiThemeProvider>
                    <DropZone store={store} />
                </MuiThemeProvider>
            );
        });

        it('should render all components', () => {
            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe('event handlers', () => {

        beforeEach(() => {
            // call shallow twice in order to call inner functions
            // @see https://github.com/reactjs/redux/issues/1534
           wrapper = shallow(<DropZone store={store} />).shallow();
        });

        it('should return initial empty state', () => {
            expect(
                wrapper.instance().getInitialState()
            ).toEqual(
                {tag: "", tags: [], files: [], completed: false}
            );
        });

        it('should buffer dropped files', () => {
            var files = [{file: 'test'}];

            expect(wrapper.state().files).toEqual([]);
            wrapper.instance().onDrop(files);
            expect(wrapper.state().files).toEqual(files);

            expect(store.dispatch.calledWithMatch('result of fileDropped')).toEqual(true);
        });

        const tagReact = {key: 1, label: "react"};
        const tagRedux = {key: 2, label: "redux"};
        const tagJest  = {key: 3, label: "jest"};

        it('should add tag to tags', () => {
            expect(wrapper.state().tags).toEqual([]);
            wrapper.instance().addTag(tagReact);
            expect(wrapper.state().tags).toEqual([tagReact]);
            wrapper.instance().addTag(tagRedux);
            expect(wrapper.state().tags).toEqual([tagReact, tagRedux]);
        });

        it('should delete a tag by key', () => {
            expect(wrapper.state().tags).toEqual([]);
            wrapper.instance().addTag(tagReact);
            wrapper.instance().addTag(tagRedux);
            wrapper.instance().addTag(tagJest);
            expect(wrapper.state().tags).toHaveLength(3);

            wrapper.instance().deleteTag(2);
            expect(wrapper.state().tags).toEqual([tagReact, tagJest]);

            wrapper.instance().deleteTag(3);
            expect(wrapper.state().tags).toEqual([tagReact]);

            wrapper.instance().deleteTag(1);
            expect(wrapper.state().tags).toEqual([]);
        });

        it('should not fail if tag to delete does not exist', () => {
            wrapper.instance().deleteTag(1);
            expect(wrapper.state().tags).toEqual([]);

            wrapper.instance().addTag(tagReact);
            wrapper.instance().deleteTag(99);
            expect(wrapper.state().tags).toEqual([tagReact]);
        });

        it('should update current tag', () => {
            expect(wrapper.state().tag).toEqual("");
            wrapper.instance().changeTag("more");
            expect(wrapper.state().tag).toEqual("more");
        });

        it('should not reset state if state changes', () => {
            const nextProps = {uploading: false, error: false};
            const nextState = {};

            wrapper.instance().setState = spy();
            wrapper.instance().componentWillUpdate(nextProps, nextState);
            expect(wrapper.instance().setState.callCount).toEqual(0);

        });

        it('should dispatch storeDocuments', () => {
            wrapper.instance().props.storeDocuments([{file: 'a'}], []);
            expect(dependency.storeDocuments).toHaveBeenCalledWith([{file: 'a'}], []);
            expect(store.dispatch.calledWithMatch('result of storeDocuments')).toEqual(true);
        });
    });
});

describe('containers/DropZone (uploading state)', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({uploading: true, upload_error: {error: false, errorMessage: ""}});
        store.dispatch = spy();

        // call shallow twice in order to call inner functions
        // @see https://github.com/reactjs/redux/issues/1534
        wrapper = shallow(<DropZone store={store} />).shallow();
    });

    it('should render all components', () => {
        //wrapper = renderer.create(
        //    <MuiThemeProvider>
        //        <DropZone store={store} />
        //    </MuiThemeProvider>
        //);
        //
        //expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should reset state if files were uploaded successfully', () => {
        const nextProps = {uploading: false, error: false};
        const nextState = {};

        wrapper.instance().setState = spy();
        wrapper.instance().componentWillUpdate(nextProps, nextState);
        expect(wrapper.instance().setState.callCount).toEqual(1);
        expect(wrapper.instance().setState.calledWith(wrapper.instance().getInitialState())).toEqual(true);
    });

    it('should not reset state if file upload reports an error', () => {
        const nextProps = {uploading: false, error: true};
        const nextState = {};

        wrapper.instance().setState = spy();
        wrapper.instance().componentWillUpdate(nextProps, nextState);
        expect(wrapper.instance().setState.callCount).toEqual(0);
    });
});

describe('containers/DropZoneComponent', () => {
    let wrapper, storeDocumentsSpy;

    beforeEach(() => {
        storeDocumentsSpy = spy();
        wrapper = shallow(<DropZoneComponent
            storeDocuments={storeDocumentsSpy}
            uploading={false}
            error={false}
            errorMessage={""}
            dropFiles={() => {}}
        />);
    });

    it('should trigger storeDocuments', () => {
        wrapper.instance().onDrop([{name: "abc"}]);
        wrapper.instance().addTag("alphabet");
        wrapper.instance().uploadFiles();
        expect(storeDocumentsSpy.callCount).toEqual(1);
        expect(storeDocumentsSpy.calledWith([{name: "abc"}], ["alphabet"])).toEqual(true);
    });

    it('should not trigger storeDocuments if no files are given', () => {
        wrapper.instance().uploadFiles();
        expect(storeDocumentsSpy.callCount).toEqual(0);
    });
});