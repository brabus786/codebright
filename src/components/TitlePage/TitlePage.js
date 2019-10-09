import React from 'react';


const TitlePage = (props) => {
    return (
        <div>
            <h1 style={props.style}>{props.text}</h1>
        </div>
    )
};

export default TitlePage;