import React from 'react';
import DropZone from '../../src/containers/DropZone';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

    describe('event handlers', () => {

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

        it('should buffer dropped files', () => {

        });
    });
});
