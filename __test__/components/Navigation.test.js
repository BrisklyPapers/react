import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Navigation from '../../src/components/Navigation.js';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mockStore = configureMockStore();

describe('components/Navigation', () => {
    it('renders correctly', () => {
        const navigation = renderer.create(
            <MuiThemeProvider>
                <Provider store={mockStore({searchedText: ""})}>
                    <Navigation />
                </Provider>
            </MuiThemeProvider>
        );
        expect(navigation.toJSON()).toMatchSnapshot();
    });

    it('displays fileUploadPage on button click', (done) => {
        const store = mockStore({searchedText: ""});
        const dispatchSpy = spy();
        store.dispatch = dispatchSpy;

        const wrapper = mount(
            <MuiThemeProvider>
                <Provider store={store}>
                    <Navigation />
                </Provider>
            </MuiThemeProvider>
        );

        expect(wrapper.find('FlatButton').find('#upload')).toHaveLength(1);

        // enzyme does not support touchTap currently
        // @see https://github.com/airbnb/enzyme/issues/99
        const node = ReactDOM.findDOMNode(
            ReactTestUtils.findAllInRenderedTree(wrapper.instance(), function(inst) {
                return ReactTestUtils.isDOMComponent(inst) && inst.getAttribute("id") === 'upload';
            })[0]
        );
        // Click FlatButton.EnhancedButton.button
        ReactTestUtils.Simulate.click(node.firstChild.firstChild);

        expect.assertions(2);
        setTimeout(() => {
            expect(dispatchSpy.callCount).toEqual(1);
            done();
        }, 0);
    });
});