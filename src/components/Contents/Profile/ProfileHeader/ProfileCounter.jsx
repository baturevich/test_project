import React from 'react';
import s from './ProfileHeader.module.scss';
const ProfileCounter = (props)=>{
    return(
        <div className={`${s.profile__item} ${s.short_data_content} ${s.main_info_item}`}>
            <div className={s.profile_data}>
              <p className={s.profile_data__number}>{props.posts_data.length || "0"}</p>Posts
                </div>
            <div className={s.profile_data}>
              <p className={s.profile_data__number}>{props.user_data.music_count || "64"}</p>Music
                </div>
            <div className={s.profile_data}>
              <p className={s.profile_data__number}>{props.user_data.videos_count || "3"}</p>Videos
                </div>
            <div className={s.profile_data}>
              <p className={s.profile_data__number}>{props.user_data.followers_count || "137"}</p>Followers
                </div>
          </div>
    )
}
export default ProfileCounter;