import SearchResult from '../../src/components/SearchResult.js';

describe('components/SearchResult', () => {
    it('works', () => {
        let renderer = new ReactShallowRenderer();
        renderer.render(<SearchResult title="Foo" url="http://abc.de" description="desc" />);
        let actualElement = renderer.getRenderOutput();
        let expectedElement =
            <div>
                <a title="Foo" href="http://abc.de" target="_blank">Foo</a>
                <br/>
                <div
                    dangerouslySetInnerHTML={{
                        __html: 'desc'
                    }}
                />

        </div>;
        expect(actualElement).toEqualJSX(expectedElement);
    })
});