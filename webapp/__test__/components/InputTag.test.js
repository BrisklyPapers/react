import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import InputTag from '../../src/components/InputTag.js';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

describe('components/InputTag', () => {
    it('should render correctly', () => {
        const inputTag = renderer.create(
            <InputTag
                addTag={() => {}}
                deleteTag={() => {}}
                changeTag={() => {}}
                tags={[]}
                tag=""
            />
        );
        expect(inputTag.toJSON()).toMatchSnapshot();
    });

    it('should display chips for given tags', () => {
        const wrapper = shallow(
            <InputTag
                addTag={() => {}}
                deleteTag={() => {}}
                changeTag={() => {}}
                tags={[{key: "t1", label: "test"}, {key: "t2", label: "react"}]}
                tag=""
            />
        );
        expect(wrapper.find('Chip')).toHaveLength(2);
        expect(wrapper.find('Chip').first().prop("children")).toEqual("test");
    });

    it('should call deleteTag method when Chip is deleted', (done) => {
        const deleteTagSpy = spy();
        const wrapper = mount(
                <InputTag
                    addTag={() => {}}
                    deleteTag={deleteTagSpy}
                    changeTag={() => {}}
                    tags={[{key: "t1", label: "test"}]}
                    tag=""
                />
        );
        expect(wrapper.find('Chip')).toHaveLength(1);

        // enzyme does not support touchTap currently
        // @see https://github.com/airbnb/enzyme/issues/99
        const node = ReactDOM.findDOMNode(
            ReactTestUtils.findRenderedDOMComponentWithTag(
                wrapper.instance(), 'svg'
            )
        );
        ReactTestUtils.Simulate.touchTap(node);

        expect.assertions(2);
        setTimeout(() => {
            expect(deleteTagSpy.callCount).toEqual(1);
            done();
        }, 0)
    });

    it('should return input value on input change', (done) => {
        const changeTagSpy = spy();
        const addTagSpy = spy();
        const wrapper = mount(
            <InputTag
                addTag={addTagSpy}
                deleteTag={() => {}}
                changeTag={changeTagSpy}
                tags={[]}
                tag=""
            />
        );
        expect(wrapper.find('TextField')).toHaveLength(1);
        wrapper.find('TextField').first().find('input').simulate('change', {key: 'f', target: {value: 'f'}});

        expect.assertions(3);
        setTimeout(() => {
            expect(changeTagSpy.callCount).toEqual(1);
            expect(changeTagSpy.calledWithMatch("f")).toEqual(true);
            done();
        }, 0);
    })

    it('should clear input and create new tag if Return is pressed', (done) => {
        const changeTagSpy = spy();
        const addTagSpy = spy();
        const wrapper = mount(
            <InputTag
                addTag={addTagSpy}
                deleteTag={() => {}}
                changeTag={changeTagSpy}
                tags={[]}
                tag=""
            />
        );
        expect(wrapper.find('TextField')).toHaveLength(1);
        wrapper.find('TextField').first().find('input').simulate('keyPress', {key: 'Enter', target: {value: 'f'}});

        expect.assertions(5);
        setTimeout(() => {
            expect(changeTagSpy.callCount).toEqual(1);
            expect(changeTagSpy.calledWithMatch("")).toEqual(true);
            expect(addTagSpy.callCount).toEqual(1);
            expect(addTagSpy.calledWithMatch({key: 1, label: 'f'})).toEqual(true);
            done();
        }, 0);
    });

    it('should create several tags with increased key', (done) => {
        const addTagSpy = spy();
        const wrapper = mount(
            <InputTag
                addTag={addTagSpy}
                deleteTag={() => {}}
                changeTag={() => {}}
                tags={[]}
                tag=""
            />
        );
        wrapper.find('TextField').first().find('input').simulate('keyPress', {key: 'Enter', target: {value: 'a'}});
        wrapper.find('TextField').first().find('input').simulate('keyPress', {key: 'Enter', target: {value: 'b'}});

        expect.assertions(3);
        setTimeout(() => {
            expect(addTagSpy.callCount).toEqual(2);
            expect(addTagSpy.calledWithMatch({key: 1, label: 'a'})).toEqual(true);
            expect(addTagSpy.calledWithMatch({key: 2, label: 'b'})).toEqual(true);
            done();
        }, 0);
    });
});