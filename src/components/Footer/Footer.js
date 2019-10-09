import React from 'react';
import classes from './Footer.module.css';

const Footer = () =>{
    return(
        <footer>
            <div className={'myContainer' + ' ' + classes.line}>
                <ul className={classes.list}>
                    <li><a href="mailto:mail@mailtest.com">mail@mailtest.com</a></li>
                    <li><a href="tel:+306977664062">+30-6977664062</a></li>
                </ul>
                <span>Copyright © 2019 Test All Rights Reserved.</span>
            </div>
        </footer>
    )
};
export default Footer;