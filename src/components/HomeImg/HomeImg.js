import React from 'react';
import homeImg from '../../assets/img/homeImg.png';
import classes from './HomeImg.module.css';

const HomeImg = () =>{
    return(
        <div className={classes.wrapImg}>
            <img src={homeImg} alt="img"/>
        </div>
    )
};

export default HomeImg;