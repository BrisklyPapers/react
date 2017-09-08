import React from 'react';
import FileUploadPage from '../../src/containers/FileUploadPage';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {PAGEVIEW_FILE_UPLOAD} from '../../src/actions';

const mockStore = configureMockStore();

describe('containers/FileUploadPage', () => {
   let wrapper, store;

    it('maps state and dispatch to props', () => {
        store = mockStore({});
        wrapper = shallow(<FileUploadPage store={store}/>);
        expect(wrapper.props()).toEqual(expect.objectContaining({
            visible: expect.any(Boolean)
        }));
    });

    it('should be visible', () => {
        store = mockStore({navigation: PAGEVIEW_FILE_UPLOAD});
        wrapper = shallow(<FileUploadPage store={store}/>);
        expect(wrapper.props().visible).toEqual(true);
    });

    it('should be hidden', () => {
        store = mockStore({navigation: ''});
        wrapper = shallow(<FileUploadPage store={store}/>);
        expect(wrapper.props().visible).toEqual(false);
    });
});