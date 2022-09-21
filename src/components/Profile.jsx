import React from 'react';
import Posts from './Posts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts AllPosts={props.AllPosts} addPost={props.addPost} />
        </div>
    );
}

export default Profile;
