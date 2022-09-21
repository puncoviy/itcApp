import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const AllPosts = [
    {
        id: 1,
        name: 'Lora K',
        date: '20.09.2022 11:00',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsa accusamus eius rem maiores culpa cum tempore qui accusantium. Eum.'

    },
    {
        id: 2,
        name: 'Lora K',
        date: '20.09.2022 11:00',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsa accusamus eius rem maiores culpa cum tempore qui accusantium. Eum.'

    },
    {
        id: 3,
        name: 'Lora K',
        date: '20.09.2022 11:00',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsa accusamus eius rem maiores culpa cum tempore qui accusantium. Eum.'

    }
]

const Users = [
    {
        id: 1,
        name: 'Victor'
    },
    {
        id: 2,
        name: 'Pavel'
    },
    {
        id: 3,
        name: 'Petr'
    },
    {
        id: 4,
        name: 'Olga'
    }
]
const UserMessages = [
    {
        id: 1,
        sender: 'remote',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
    },
    {
        id: 2,
        sender: 'local',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
    },
    {
        id: 3,
        sender: 'remote',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
    }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App AllPosts={AllPosts} Users={Users} UserMessages={UserMessages} />
);
