import React from 'react';
import PageView from '../../src/components/PageView.js';
import renderer from 'react-test-renderer';

describe('components/PageView', () => {
    it('renders correctly', () => {
        const pageView = renderer.create(
            <PageView visible={true}><span>Child</span></PageView>
        );
        expect(pageView.toJSON()).toMatchSnapshot();
    });
});