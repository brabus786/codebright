import React from 'react';
import classes from './Header.module.css';
import logo from './../../assets/img/logo.png';
import Nav from "../Nav/Nav";

const Header  = () =>{
  return(
      <header className={'myContainer' + ' ' + classes.properties_header}>
          <div className={classes.wrapImg}>
              <img src={logo} alt="img"/>
          </div>
          
          <Nav/>
      </header>
  )
};

export default Header;