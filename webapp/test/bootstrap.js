import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

global.React = React;
global.expect = expect;
global.ReactShallowRenderer = ReactShallowRenderer;
global.sinon = sinon;