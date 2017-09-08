import React from 'react';
import Search from '../../src/components/Search.js';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import {spy} from 'sinon';

describe('components/Search', () => {
    it('renders correctly', () => {
        const search = renderer.create(
            <Search searchedText="test" triggerSearch={() => {}}/>
        );
        expect(search.toJSON()).toMatchSnapshot();
    });

    it('triggers search on change', (done) => {
        const callbackSpy = spy();
        const wrapper = mount(
            <Search searchedText="test" triggerSearch={callbackSpy}/>
        );

        const event = {key: 'f', target: {value: 'f'}};
        wrapper.find('TextField').first().find('input').simulate('change', event);

        expect.assertions(2);
        setTimeout(() => {
            expect(callbackSpy.callCount).toEqual(1);
            expect(callbackSpy.calledWithMatch(event)).toEqual(true);
            done();
        }, 0);
    });

    it('triggers callback on focus', (done) => {

        const callbackSpy = spy();
        const wrapper = mount(
            <Search searchedText="test" triggerSearch={() => {}} onFocus={callbackSpy}/>
        );

        wrapper.find('TextField').first().find('input').simulate('focus');

        expect.assertions(1);
        setTimeout(() => {
            expect(callbackSpy.callCount).toEqual(1);
            done();
        }, 0);
    });
});