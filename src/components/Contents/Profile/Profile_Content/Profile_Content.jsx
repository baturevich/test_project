import React from 'react';
import s from './Profile_Content.module.css';
import Profile_Left_Side from './Profile_Left_Side/Profile_Left_Side';
import Profile_Posts from './Profile_Posts/Profile_Posts';



const Profile_Content = (props) => {
    return (
        <div className="row">
            <Profile_Left_Side />
            <Profile_Posts  />
        </div>
    );
};

export default Profile_Content;