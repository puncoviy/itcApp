import React from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from '../styles/Posts.module.css'

const Posts = () => {
    return (
        <div>
            <NewPost />
            <div className={classes.postlist}>
                <Post name='Lora K' date='20.09.2022 11:00' />
                <Post name='Lora K' date='20.09.2022 11:00' />
            </div>
        </div>
    );
}

export default Posts;
