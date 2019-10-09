import React from 'react';
import classes from './HomePage.module.css';
import HomeImg from "../HomeImg/HomeImg";
import AdvantageCards from "../AdvantageCards/AdvantageCards";
import AddComment from "../AddComment/AddComment";


const HomPage = () => {
    return (
        <div>
            <div className={'myContainer'}>
                <h1 className={classes.titleHome}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
            </div>
            <HomeImg/>
            <AdvantageCards/>
            <AddComment/>
        </div>
    )
};

export default HomPage;