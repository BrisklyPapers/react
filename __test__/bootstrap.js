import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

window.clickMaterialUiFlatButton = (wrapper, id) => {
    // enzyme does not support touchTap currently
    // @see https://github.com/airbnb/enzyme/issues/99
    const node = ReactDOM.findDOMNode(
        ReactTestUtils.findAllInRenderedTree(wrapper.instance(), function(inst) {
            return ReactTestUtils.isDOMComponent(inst) && inst.getAttribute("id") === id;
        })[0]
    );
    // Click FlatButton.EnhancedButton.button
    ReactTestUtils.Simulate.click(node.firstChild.firstChild);
}