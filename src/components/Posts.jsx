import React from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from '../styles/Posts.module.css'

const AllPosts = [
    {
        id: 1,
        name: 'Lora K',
        date: '20.09.2022 11:00',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsa accusamus eius rem maiores culpa cum tempore qui accusantium. Eum.'

    },
    {
        id: 2,
        name: 'Lora K',
        date: '20.09.2022 11:00',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsa accusamus eius rem maiores culpa cum tempore qui accusantium. Eum.'

    },
    {
        id: 3,
        name: 'Lora K',
        date: '20.09.2022 11:00',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsa accusamus eius rem maiores culpa cum tempore qui accusantium. Eum.'

    }
]

const Posts = () => {
    const AllPost = AllPosts.map(post => <Post key={'post' + post.id} name={post.name} date={post.date} text={post.text} />)
    return (
        <div>
            <NewPost />
            <div className={classes.postlist}>
                {AllPost}
            </div>
        </div>
    );
}

export default Posts;
