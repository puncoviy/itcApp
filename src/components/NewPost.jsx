import React from 'react';
import classes from '../styles/NewPost.module.css';

const NewPost = () => {
    let newPostElement = React.createRef();
    const addPost = () => {
        const newPostText = newPostElement.current.value;
        console.log(newPostText)
    }

    return (
        <div className={classes.new_post}>
            <h2 className={classes.title}>Recent posts</h2>
            <textarea className={classes.post_text} ref={newPostElement} name="new_post" placeholder='Write you comment'></textarea>
            <button className={classes.btn} onClick={addPost}>Submit</button>
        </div>
    );
}

export default NewPost;
