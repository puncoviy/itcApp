import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';

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

const User = (props) => {
    return (
        <NavLink to={'/messages/' + props.id} className={el => el.isActive ? classes.active : classes.usersItem}>{props.name}</NavLink>
    )
}

const UserMessages = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
    },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!'
    }
]

const Message = (props) => {
    return (
        <li className={classes.messageItem}>{props.text}</li>
    )
}

const Messages = (props) => {

    const UserName = Users.map(users => <User key={'user' + users.id} name={users.name} id={users.id} />)
    const UserMessage = UserMessages.map(message => <Message key={'message' + message.id} text={message.text} />)

    return (
        <div className={classes.messages}>
            <div className={classes.users}>
                <div className={classes.usersList}>
                    {UserName}
                </div>
            </div>
            <div className={classes.messagesBox}>
                <ul className={classes.messageList}>
                    {UserMessage}
                </ul>
                <div className={classes.newMessage}>
                    <textarea className={classes.input} placeholder='Enter your message'></textarea>
                    <button className={classes.btn}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;