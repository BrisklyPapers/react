import Search from '../../src/components/Search.js';
import TextField from 'material-ui/TextField';
import { shallow } from 'enzyme';

describe('components/Search', () => {
    it('works', () => {
        let renderer = new ReactShallowRenderer();
        renderer.render(<Search searchedText="test" triggerSearch={() => {}}/>);
        let actualElement = renderer.getRenderOutput();
        let expectedElement =
            <TextField
                hintText="Search here .."
                onChange={() => {}}
                rows={1}
                type="text"
                underlineShow
                value="test"
            />
        ;
        expect(actualElement).toEqualJSX(expectedElement);
    });
});