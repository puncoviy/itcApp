import React from 'react';
import Header from './components/Header';
import MainNav from './components/MainNav';
import './styles/App.css';
import './styles/Reset.css'
import Profile from './components/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className="container">
                    <section className="main">
                        <MainNav />
                        <div className="main__content">
                            <Routes>
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/messages/*' element={<Messages />} />
                                <Route path='/news' element={<News />} />
                                <Route path='/music' element={<Music />} />
                                <Route path='/settings' element={<Settings />} />
                            </Routes>
                        </div>
                    </section>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
