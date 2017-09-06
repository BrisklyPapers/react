import React from 'react';
import DropZone from '../../src/containers/DropZone';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
const mockStore = configureMockStore();

describe('containers/DropZone', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({uploading: false, upload_error: {error: false, errorMessage: ""}});
        store.dispatch = spy();
        wrapper = shallow(<DropZone store={store} />);
    });

    it('renders correctly', () => {
        const renderer = new ShallowRenderer();
        renderer.render(
            <DropZone store={store} />
        );
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining ({
            uploading: expect.any(Boolean),
            error: expect.any(Boolean),
            errorMessage: expect.any(String),
            storeDocuments: expect.any(Function),
            dropFiles: expect.any(Function)
        }));
    });

});