import React from 'react';
import FileDrop from '../../src/components/FileDrop.js';
import renderer from 'react-test-renderer';

describe('components/FileDrop', () => {
    it('renders correctly', () => {
        const fileDrop = renderer.create(
            <FileDrop dropFiles={() => {}} files={[]} />
        );
        expect(fileDrop.toJSON()).toMatchSnapshot();
    });
});