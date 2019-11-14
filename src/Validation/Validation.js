import React from 'react';

import './Validation.css';

const Validation = (props) => {
    

    let limitWarning = "Text is too short!";
    let textColor = "red";
    if(props.leng > 5){
        limitWarning = "Text is long enough!";
        textColor = "blue";
    }

    let style={
        color: textColor
    };
    return (
        <div>   
            <p>Length of the text: <b>{props.leng}</b></p>
            <p style={style}>{limitWarning}</p>
        </div>
    );
};

export default Validation;