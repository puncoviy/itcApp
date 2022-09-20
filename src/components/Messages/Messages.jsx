import React from 'react';
import classes from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={classes.messages}>
            <div className={classes.users}>
                <ul className={classes.usersList}>
                    <li className={classes.usersItem}>Viktor</li>
                    <li className={classes.usersItem}>Pavel</li>
                    <li className={classes.usersItem}>Petr</li>
                    <li className={classes.usersItem}>Olga</li>
                </ul>
            </div>
            <div className={classes.messagesBox}>
                <ul className={classes.messageList}>
                    <li className={classes.messageItem}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!
                    </li>
                    <li className={classes.messageItem}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!
                    </li>
                    <li className={classes.messageItem}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aut!
                    </li>
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