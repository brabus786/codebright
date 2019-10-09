import React from 'react';
import { Link } from 'react-router-dom';
import classes from "../WriteComment/WriteCommentsStyle.module.css";
import arrow from "../../assets/img/VectorSmartObject14.png";

const BackToBlock = (props) =>{
    return(
        <div>
            <p className={classes.bottom_text}>Lorem Ipsum is text of the typesetting industry</p>

            <div className={classes.wrap_bottom}>
                <Link className={classes.bottom_batton} to={props.link}>
                    <img src={arrow} alt="arrow" />
                    <span>Back to Comments</span>
                </Link>
            </div>
        </div>
    )
};
export default BackToBlock;