import React from 'react';
import s from './Profile.module.css';
import Profile_Content from './Profile_Content/Profile_Content';
import Profile_Header_Container from './Profile_Header/Profile_Header_Container';


const Profile = (props) => {
    return (
        <div className={s.profile}>
           <Profile_Header_Container/>
            <Profile_Content/>
        </div>
    );


};

export default Profile;