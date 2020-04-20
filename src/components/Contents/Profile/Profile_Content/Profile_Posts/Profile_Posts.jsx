import React from 'react';
import s from './Profile_Posts.module.css'
import Profile_New_Post_Container from './Profile_New_Post/Profile_New_Post_Container';
import Profile_Post_Container from './Profile_Post/Profile_Post_Container';




const Profile_Posts = (props) => {
    let state = props.store.getState();

    return (
        <div className={`${s.content} col-sm-8`}>
            <Profile_New_Post_Container />
            <Profile_Post_Container />
        </div>
    )

};

export default Profile_Posts;