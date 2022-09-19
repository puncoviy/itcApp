import React from 'react';
import classes from '../styles/ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img className={classes.bg} src="https://besthqwallpapers.com/Uploads/25-4-2020/130574/thumb2-colorful-paint-splashes-artwork-abstract-art-creative-abstract-splashes.jpg" alt="profile-header" />
            <div className={classes.box}>
                <img className={classes.avatar} src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="profile-avatar" />
                <div className={classes.info}>
                    <p className={classes.name}>Dmitriy K</p>
                    <p className={classes.birth}>17 March 1990</p>
                    <p className={classes.location}>Rostov-on-Don, Russia</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
