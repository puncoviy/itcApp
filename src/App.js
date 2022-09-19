import React from 'react';
import './styles/App.css';
import './styles/Reset.css'

function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="header">
                    <img className='header__logo' src="https://img.icons8.com/clouds/452/react.png" alt="React" />
                </header>
            </div>
            <div className="container">
                <section className="main">
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
                    <div className="main__content">
                        <img className='content-img' src="https://besthqwallpapers.com/Uploads/25-4-2020/130574/thumb2-colorful-paint-splashes-artwork-abstract-art-creative-abstract-splashes.jpg" alt="profile-header" />
                        <div className="content__profile-box">
                            <img className='content__profile-img' src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="profile-avatar" />
                            <div className="conten__profile-info">
                                <p className="profile__name">Dmitriy K</p>
                                <p className="profile__birth">17 March 1990</p>
                                <p className="profile__location">Rostov-on-Don, Russia</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
