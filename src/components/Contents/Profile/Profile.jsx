import React from 'react';
import s from './Profile.module.css';
import Profile_Header from './Profile_Header/Profile_Header';
import Profile_Content from './Profile_Content/Profile_Content';


const Profile = (props) => {

    let state = props.store.getState();
    //Maping
    let profile_HeaderElements =
        state.profile_page.user_data.map(u => <Profile_Header
            imgAdress={u.imgAdress}
            name={u.name}
            posts_count={u.posts_count}
            friends_count={u.friends_count}
            followers_count={u.followers_count}
            music_count={u.music_count}
            videos_count={u.videos_count}
        />);
    return (
        <div className={s.profile}>
            {profile_HeaderElements}
            <Profile_Content store={props.store} />
        </div>
    );


};

export default Profile;