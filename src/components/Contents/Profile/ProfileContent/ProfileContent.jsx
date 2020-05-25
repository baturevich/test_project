import React from 'react';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import ProfileLeftSide from './ProfileLeftSide/ProfileLeftSide';


const ProfileContent = (props) => {
    return (
        <div className="row">
            <ProfileLeftSide />
            <ProfilePosts  />
        </div>
    );
};

export default ProfileContent;