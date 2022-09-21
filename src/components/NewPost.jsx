import React from 'react';
import classes from '../styles/NewPost.module.css';

const NewPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let newPostText = newPostElement.current.value;
        props.addPost(newPostText);
        props.updateNewPostText('');
    }
    let onPostChange = () => {
        let newPostText = newPostElement.current.value;
        props.updateNewPostText(newPostText);
    }

    return (
        <div className={classes.new_post}>
            <h2 className={classes.title}>Recent posts</h2>
            <textarea className={classes.post_text}
                onChange={onPostChange}
                ref={newPostElement}
                name="new_post"
                placeholder='Write you comment'
                value={props.newPostValue}
                />
            <button className={classes.btn} onClick={addPost}>Submit</button>
        </div>
    );
}

export default NewPost;
