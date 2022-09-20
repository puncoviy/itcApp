import React from 'react';
import classes from '../styles/NewPost.module.css'

const NewPost = () => {
    return (
        <div className={classes.new_post}>
            <h2 className={classes.title}>Recent posts</h2>
            <textarea className={classes.post_text} name="new_post" placeholder='Write you comment'></textarea>
            <button className={classes.btn}>Submit</button>
        </div>
    );
}

export default NewPost;
