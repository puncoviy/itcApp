import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../styles/MainNav.module.css'

const MainNav = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li>
                    <NavLink className = { el => el.isActive ? classes.active : classes.nav__item_link } to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink className = { el => el.isActive ? classes.active : classes.nav__item_link } to="/messages">Messages</NavLink>
                </li>
                <li>
                    <NavLink className = { el => el.isActive ? classes.active : classes.nav__item_link } to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink className = { el => el.isActive ? classes.active : classes.nav__item_link } to="/music">Music</NavLink>
                </li>
                <li>
                    <NavLink className = { el => el.isActive ? classes.active : classes.nav__item_link } to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;
