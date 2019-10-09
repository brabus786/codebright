import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classes from './NavItem.module.css';

const NavItem = (props) =>{
    return(
        <li className={classes.NavItem}>
            {!props.hashLink ?
            <NavLink to={props.link} exact={props.exact} activeClassName={classes.Active}>
                <span/>
                {props.label}
            </NavLink>
            :
                <HashLink to={props.link} smooth>{props.label}</HashLink>
            }
        </li>
    )
};

export default NavItem;