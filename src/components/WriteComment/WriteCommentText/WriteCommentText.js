import React from 'react';
import classes from './WriteCommentText.module.css';

const WriteCommentText = (props) => {
    return (
        <div className={classes.smol_container}>
            <p>
                {props.text}
            </p>
        </div>
    )
};

export default WriteCommentText;