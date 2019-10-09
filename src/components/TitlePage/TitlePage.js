import React from 'react';
import classes from "./TitlePage.module.css";


const TitlePage = (props) => {
    return (
        <div>
            <h1 style={props.style}>{props.text}</h1>
        </div>
    )
};

export default TitlePage;