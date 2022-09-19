import React from 'react';
import classes from './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <a className='header__link' href="#">Home</a>
            <a className='header__link' href="#">About</a>
            <a className='header__link' href="#">Contacts</a>
        </header>
    );
}

export default Header;
