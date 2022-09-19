import React from 'react';
import classes from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className="container">
            <header className={classes.header}>
                <img className={classes.logo} src="https://img.icons8.com/clouds/452/react.png" alt="React" />
            </header>
        </div>
    );
}

export default Header;
