import React from 'react';
import classes from './AddComment.module.css';
import FormAddComment from "../FormAddComment/FormAddComment";

const AddComment = () => {
    return (
        <div className={classes.comments_block} id="write-comment">
            <div className={classes.inner}>
                <div>
                    <p className={classes.title}>Write comment</p>
                    <span className={classes.underline}></span>
                </div>
                <FormAddComment/>
            </div>
        </div>
    )
};

export default AddComment;