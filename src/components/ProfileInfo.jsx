import React from 'react';

const ProfileInfo = () => {
    return (
        <div className="main__content">
            <img className='content-img' src="https://besthqwallpapers.com/Uploads/25-4-2020/130574/thumb2-colorful-paint-splashes-artwork-abstract-art-creative-abstract-splashes.jpg" alt="profile-header" />
            <div className="content__profile-box">
                <img className='content__profile-img' src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="profile-avatar" />
                <div className="conten__profile-info">
                    <p className="profile__name">Dmitriy K</p>
                    <p className="profile__birth">17 March 1990</p>
                    <p className="profile__location">Rostov-on-Don, Russia</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
