import React, {Component} from 'react';

export default ({sales}) => {
    return (
        <div className="product-detail">
            <img src={sales.image} />
            <div className="title">{sales.title}</div>
            <div className="subtitle">{sales.subtitle}</div>
        </div>
    );
}
