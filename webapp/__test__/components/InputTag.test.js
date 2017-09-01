import React from 'react';
import InputTag from '../../src/components/InputTag.js';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('components/InputTag', () => {
    it('renders correctly', () => {
        const inputTag = renderer.create(
            <MuiThemeProvider>
                <InputTag
                    addTag={() => {}}
                    deleteTag={() => {}}
                    changeTag={() => {}}
                    tags={[]}
                    tag=""
                />
            </MuiThemeProvider>
        );
        expect(inputTag.toJSON()).toMatchSnapshot();
    });
});