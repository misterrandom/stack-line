import React from 'react';

export default ({tags}) => {

    let tagList = [];
    tags.map((tag) => {
        tagList.push(<div className="tag" key={tag}>{tag}</div>);
    });

    return (
        <div>{tagList}</div>
    );

}