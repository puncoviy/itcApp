import React from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from '../styles/Posts.module.css'

const Posts = (props) => {
    const PostList = props.AllPosts.map(post => <Post key={'post' + post.id} name={post.name} date={post.date} text={post.text} />)
    return (
        <div>
            <NewPost addPost={props.addPost} 
            newPostValue={props.newPostValue}
            updateNewPostText={props.updateNewPostText} 
            />
            <div className={classes.postlist}>
                {PostList}
            </div>
        </div>
    );
}

export default Posts;
