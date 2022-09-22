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

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let newMessageText = newMessageElement.current.value;
        props.addMessage(newMessageText);
        newMessageElement.current.value = '';
    }

    const UserName = props.Users.map(user => <User
        key={'user' + user.id}
        name={user.name}
        id={user.id}
        UserMessages={user.UserMessages} />)
    const UserMessage = props.UserMessages.map(message => <Message key={'message' + message.id} text={message.text} sender={message.sender} />)
    // const UserMessageUpd = props.Users.map(dialog => {
    //     dialog.UserMessages.map(
    //         message =>
    //         {console.log(message);
    //         <Message key={'message' + message.id}
    //             text={message.text}
    //             sender={message.sender} />}
    //     )
    // });

    return (
        <div className={classes.messages}>
            <div className={classes.users}>
                <div className={classes.usersList}>
                    {UserName}
                </div>
            </div>
            <div className={classes.messagesBox}>
                <ul className={classes.messageList}>
                    {/* {UserMessageUpd} */}
                    {UserMessage}
                </ul>
                <div className={classes.newMessage}>
                    <textarea
                        className={classes.input}
                        ref={newMessageElement}
                        placeholder='Enter your message'></textarea>
                    <button className={classes.btn}
                        onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;