import React from 'react';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

const Nav = () =>{
  return(
      <ul className={classes.nav_list}>
          <NavItem label="About us" exact link="/" />
          <NavItem label="Write Comment" hashLink link="/#write-comment" />
          <NavItem label="Comments" link="/comments" />
      </ul>
  )
};

export default Nav;