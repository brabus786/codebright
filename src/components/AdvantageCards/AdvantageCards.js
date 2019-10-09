import React from 'react';
import classes from './AdvantageCards.module.css';
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import img1 from './../../assets/img/VectorSmartObject11.png';
import img2 from './../../assets/img/VectorSmartObject12.png';
import img3 from './../../assets/img/VectorSmartObject13.png';
import AdvantageCardContent from "../AdvantageCard/AdvantageCardContent";

function f(x) {
    const li1 = x.map((value, index) => {
        return <li key={index}>{value}</li>
    });
    return li1;
}

const AdvantageCards = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.inner}>
                <AdvantageCard image={img1} title={AdvantageCardContent.title1} ul={f(AdvantageCardContent.content1)}/>
                <AdvantageCard image={img2} title={AdvantageCardContent.title2} ul={f(AdvantageCardContent.content2)}/>
                <AdvantageCard image={img3} title={AdvantageCardContent.title3} ul={f(AdvantageCardContent.content3)}/>
            </div>
        </div>
    )
};

export default AdvantageCards;