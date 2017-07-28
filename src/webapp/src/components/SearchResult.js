import React from 'react'

const SearchResult = ({title, url, description}) => {
    return (
        <div>
            <a title={title} href={url} target="_blank">{title}</a>
            <br/>
            <div dangerouslySetInnerHTML={{__html: description}}/>
        </div>
    )
};

export default SearchResult