import React from 'react';
import classes from './HomePage.module.css';
import TitlePage from "../TitlePage/TitlePage";
import HomeImg from "../HomeImg/HomeImg";
import AdvantageCards from "../AdvantageCards/AdvantageCards";
import AddComment from "../AddComment/AddComment";
import state from "../TitlePage/TitlePageText";
import Footer from "../Footer/Footer";

const TitlePageHome = {
    fontSize:'70px',
    color:'rgb(17, 21, 24)',
    lineHeight:'1.029',
    textAlign:'left',
    padding:'0 130px',
    fontFamily:'Sofia Pro Semi',
    fontWeight:'700',
    maxWidth:'850px',
    margin:'10px 0 90px 0'
};

const HomPage = () => {
    return (
        <div>
            <div className={'myContainer'}>
                <TitlePage style={TitlePageHome} text={state.aboutUs}/>
            </div>
            <HomeImg/>
            <AdvantageCards/>
            <AddComment/>
        </div>
    )
};

export default HomPage;