import React from 'react';
import Header from './components/Header';
import MainNav from './components/MainNav';
import './styles/App.css';
import './styles/Reset.css'
import Profile from './components/Profile';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <section className="main">
                    <MainNav />
                    <Profile />
                </section>
            </div>
        </div>
    );
}

export default App;
