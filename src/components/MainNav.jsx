import React from 'react';

const MainNav = () => {
    return (
        <nav className="main__nav">
            <ul className="main__nav-list">
                <li className="main__nav-item">
                    <a className='main__nav-item--link' href="#">Profile</a>
                </li>
                <li className="main__nav-item">
                    <a className='main__nav-item--link' href="#">Messages</a>
                </li>
                <li className="main__nav-item">
                    <a className='main__nav-item--link' href="#">News</a>
                </li>
                <li className="main__nav-item">
                    <a className='main__nav-item--link' href="#">Music</a>
                </li>
                <li className="main__nav-item">
                    <a className='main__nav-item--link' href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;
