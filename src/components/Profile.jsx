import React from 'react';
import Posts from './Posts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts AllPosts={props.AllPosts} />
        </div>
    );
}

export default Profile;
