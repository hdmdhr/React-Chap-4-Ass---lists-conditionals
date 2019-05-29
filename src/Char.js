import React from 'react';

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (
        <div style={style} onClick={props.clicked}>
            <h3><em>{props.character}</em></h3>
        </div>
    );
}

export default Char;