import { reRender } from "../index";

let state = {
    AllPosts: [
        {
            id: 1,
            name: 'Lora K',
            date: '20.09.2022 11:00',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsa accusamus eius rem maiores culpa cum tempore qui accusantium. Eum.',

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
    ],
    newPostValue: '' ,
    Users: [
        {
            id: 1,
            name: 'Victor',
            UserMessages: [
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
        },
        {
            id: 2,
            name: 'Pavel',
            UserMessages: [
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
                },
                {
                    id: 4,
                    sender: 'remote',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
                },
                {
                    id: 5,
                    sender: 'remote',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
                },
            ]
        },
        {
            id: 3,
            name: 'Petr',
            UserMessages: [
                {
                    id: 1,
                    sender: 'remote',
                    text: 'Congratulations! You have won a $1000 Walmart gift card. Go to http://scam.you/faggot to claim now',
                    blacklisted: true,
                }
            ]
        },
        {
            id: 4,
            name: 'Olga',
            UserMessages: [
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
                },
                {
                    id: 4,
                    sender: 'remote',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
                },
                {
                    id: 5,
                    sender: 'local',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
                },
                {
                    id: 6,
                    sender: 'local',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
                },
                {
                    id: 7,
                    sender: 'remote',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
                },
                {
                    id: 8,
                    sender: 'local',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
                },
                {
                    id: 9,
                    sender: 'remote',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
                }
            ]
        }
    ],
    UserMessages: [
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
}

export let addPost = (postText) => {
    let newPost = {
        id: Math.random(),
        name: 'Lora K',
        date: '20.09.2022 11:00',
        text: postText
    };
    state.AllPosts.push(newPost);
    reRender(state);
}

export let updateNewPostText = (newText) => {
    state.newPostValue = newText;
    reRender(state);
}

export let addMessage = (messageText) => {
    let newMessage = {
        id: 'message' + Math.random(),
        sender: 'local',
        text: messageText
    }
    state.UserMessages.push(newMessage);
    reRender(state);
}

export default state;