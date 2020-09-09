import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function Star({className, value, height, width, spacing}){
    const decimals = Number(value) % 1;

    const star = [];
    let leftPost = 0;
    for(let i = 0; i < 5 && i < value - decimals; i++){
        leftPost = leftPost * width;
        star.push(
            <div className="star" key={`star-${i}`} style={{left: i * width, height: height, width:width, marginRight: spacing}}></div>
        );
    }
    if(decimals > 0 && value <= 5)
    star.push(
        <div className="star" key={`starWithDecimals`} style={{left: leftPost, height: height, width: decimals * width - spacing}}></div>
    );

    const starPlaceHolder = [];
    for(let i = 0; i < 5; i++){
        starPlaceHolder.push(
            <div className="star placeholder" key={`starPlaceHolder-${i}`} style={{left: i * width, height: height, width: width, marginRight: spacing}}></div>
        )
    }
    return(
        <>
        <div className={['stars', className].join(" ")} style={{height: height}}>
            {starPlaceHolder}
            {star}
        </div>
        </>
    )
}

Star.prototype = {
    className: propTypes.string,
    value: propTypes.number,
    height: propTypes.number,
    width: propTypes.number,
    spacing: propTypes.number
}

