import React from 'react';

import './Char.css';

const Char = (props) => {
    const style = {
      textWeight: "bold",
      color: "green",
      marginLeft: "5px"  
    };

    return (
        <span onClick={props.click} style={style}>{props.char}</span>
    );
};

export default Char;