import React from 'react';
import classes from './AdvantageCard.module.css';


const AdvantageCard = (props) =>{
    return(
       <div className={classes.card}>
           <img src={props.image} alt="img"/>
           <p>{props.title}</p>
           <ul>{props.ul}</ul>
       </div>
    )
};

export default AdvantageCard;