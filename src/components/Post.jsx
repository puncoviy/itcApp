import React from 'react';
import classes from '../styles/Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
        <img className={classes.avatar} src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="profile-avatar" />
            <div className={classes.author_box}>
                <p className={classes.author}>
                    {props.name}
                </p>
                <p className={classes.date}>
                    {props.date}
                </p>
            </div>
            <p className={classes.text}>
                {props.text}
            </p>
        </div>
    );
}

export default Post;
