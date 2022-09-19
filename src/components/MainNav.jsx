import React from 'react';
import classes from '../styles/MainNav.module.css'

const MainNav = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li>
                    <a className={classes.nav__item_link} href="#">Profile</a>
                </li>
                <li>
                    <a className={classes.nav__item_link} href="#">Messages</a>
                </li>
                <li>
                    <a className={classes.nav__item_link} href="#">News</a>
                </li>
                <li>
                    <a className={classes.nav__item_link} href="#">Music</a>
                </li>
                <li>
                    <a className={classes.nav__item_link} href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;
