import React from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from '../styles/Posts.module.css'

const Posts = () => {
    return (
        <div>
            <NewPost />
            <div className={classes.postlist}>
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Posts;
