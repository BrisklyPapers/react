import React from 'react';
import FileDrop from '../../src/components/FileDrop.js';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme'
import { spy } from 'sinon'

describe('components/FileDrop', () => {
    it('should render correctly', () => {
        const fileDrop = renderer.create(
            <FileDrop dropFiles={() => {}} files={[]} />
        );
        expect(fileDrop.toJSON()).toMatchSnapshot();
    });

    it('should change style onDragOver and onDragEnd', () => {
        const event = {
            preventDefault: () => {
            }
        };

        const fileDrop = renderer.create(
            <FileDrop dropFiles={() => {}} files={[]} />
        );
        let tree = fileDrop.toJSON();
        expect(tree).toMatchSnapshot();

        const divBox = tree.children[0];
        expect(divBox.props.id).toEqual('fileDrop');

        divBox.props.onDragOver(event);
        expect(fileDrop.toJSON()).toMatchSnapshot();

        divBox.props.onDragEnd(event);
        expect(fileDrop.toJSON()).toMatchSnapshot();
    });

    it('should change style onDragOver and onDragLeave', () => {
        const event = {
            preventDefault: () => {
            }
        };

        const fileDrop = renderer.create(
            <FileDrop dropFiles={() => {}} files={[]} />
        );
        let tree = fileDrop.toJSON();
        expect(tree).toMatchSnapshot();

        tree.children[0].props.onDragOver(event);
        expect(fileDrop.toJSON()).toMatchSnapshot();

        tree.children[0].props.onDragLeave(event);
        expect(fileDrop.toJSON()).toMatchSnapshot();
    });

    it('should add and return dropped files', () => {
        const event = {
            preventDefault: () => {
            },
            dataTransfer: {
                files: [
                    {name: 'file1'},
                    {name: 'file2'}
                ]
            }
        };

        let files = [];
        const dropFiles = (droppedFiles) => {
            files = droppedFiles;
        };

        const fileDrop = renderer.create(
            <FileDrop dropFiles={dropFiles} files={files} />
        );

        let tree = fileDrop.toJSON();
        tree.children[0].props.onDrop(event);
        expect(fileDrop.toJSON()).toMatchSnapshot();

        expect(files).toEqual([{name: 'file1'}, {name: 'file2'}]);
    });

    it('should add and return dropped files if files are items', () => {
        const event = {
            preventDefault: () => {
            },
            dataTransfer: {
                items: [
                    {name: 'file1'},
                    {name: 'file2'}
                ]
            }
        };

        let files = [];
        const dropFiles = (droppedFiles) => {
            files = droppedFiles;
        };

        const fileDrop = renderer.create(
            <FileDrop dropFiles={dropFiles} files={files} />
        );

        let tree = fileDrop.toJSON();
        tree.children[0].props.onDrop(event);
        expect(fileDrop.toJSON()).toMatchSnapshot();

        expect(files).toEqual([{name: 'file1'}, {name: 'file2'}]);
    });

    it('should add and return dropped files if files are added by file input', () => {
        const event = {
            preventDefault: () => {
            },
            target: {
                files: [
                    {name: 'file1'},
                    {name: 'file2'}
                ]
            }
        };

        let files = [];
        const dropFiles = (droppedFiles) => {
            files = droppedFiles;
        };

        const fileDrop = renderer.create(
            <FileDrop dropFiles={dropFiles} files={files} />
        );

        let tree = fileDrop.toJSON();

        const fileInput = tree.children[0].children[3];
        expect(fileInput.props.type).toEqual('file');
        expect(fileInput.props.name).toEqual('files[]');

        fileInput.props.onChange(event);
        expect(fileDrop.toJSON()).toMatchSnapshot();

        expect(files).toEqual([{name: 'file1'}, {name: 'file2'}]);
    });

    it('should display given files', () => {
        const files = [{name: 'file1'}, {name: 'file2'}];

        const fileDrop = renderer.create(
            <FileDrop dropFiles={() => {}} files={files} />
        );
        expect(fileDrop.toJSON()).toMatchSnapshot();
    });

    it('should trigger click event on file input', (done) => {
        const fileDrop = mount(<FileDrop dropFiles={() => {}} files={[]} />);
        const clickSpy = spy(fileDrop.instance().inputElement, 'click');
        fileDrop.find('#fileDrop').simulate('click');
        setTimeout(() => {
            expect(clickSpy.callCount).toEqual(1)
            done()
        }, 0)
    })
});