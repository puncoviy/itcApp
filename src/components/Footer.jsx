import React from 'react';
import classes from './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className="footer__list">
                <li className="footer__item">Copyright</li>
                <li className="footer__item">License</li>
                <li className="footer__item">User agreement</li>
            </ul>
        </footer>
    );
}

export default Footer;
