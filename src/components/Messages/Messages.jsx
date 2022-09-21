import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';

const User = (props) => {
    return (
        <NavLink to={'/messages/' + props.id} className={el => el.isActive ? classes.active : classes.usersItem}>{props.name}</NavLink>
    )
}

const Message = (props) => {
    return (
        <li className={props.sender == 'remote' ? classes.messageReceived : classes.messageSent}>{props.text}</li>
    )
}

const Messages = (props) => {

    const UserName = props.Users.map(users => <User key={'user' + users.id} name={users.name} id={users.id} />)
    const UserMessage = props.UserMessages.map(message => <Message key={'message' + message.id} text={message.text} sender={message.sender} />)
    let newMessageElement = React.createRef();
    const sendMessage = () => {
        let newMessageText = newMessageElement.current.value;
        console.log(newMessageText)
    }

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
                    <textarea className={classes.input} ref={newMessageElement} placeholder='Enter your message'></textarea>
                    <button className={classes.btn} onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;