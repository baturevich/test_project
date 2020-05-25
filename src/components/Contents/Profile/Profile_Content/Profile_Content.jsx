import React from 'react';
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