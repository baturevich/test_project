import React from 'react';
import s from './Profile_Header.module.css';
import Profile_Status from './Profile_Status'
import { NavLink, } from 'react-router-dom';
import Profile_Info from './Profile_info/Profile_jnfo';

const Profile_Header = (props) => {
  return (
    <div className={s.profile__info}>
      <div className="row">
        <div className="col-md-3 col-xs-12 col-sm-12">
          <div className={`${s.profile__item} ${s.profile__item_img_block}`}>
            <img src={
              props.user_data.photos.large || "https://baturevich.ru/images/cn/user2.jpg"
            }
              alt="User_img" className={s.profile__img} />
          </div>
          <div className={s.assets}>
            <div className={s.button_group}>
              <button>Follow</button>
              <NavLink to={`/chats/${+props.user_data.userId}`} >New Message</NavLink>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-xs-12 col-sm-12">
          <div className={s.main_info}>
          <div className={`${s.profile__item} ${s.main_info_item} d-block`}>
            <h1 className={s.profile__name}>{props.user_data.fullName
              ? props.user_data.fullName
              : props.user_data.name}
            </h1>
            <Profile_Status status_data={props.status_data} upStatusDataTC={props.upStatusDataTC} />
          </div>
          <div className={`${s.main_info_item}`}>
          <Profile_Info />  
          </div>
          <div className={`${s.profile__item} ${s.short_data_content} ${s.main_info_item}`}>
            <div className={s.profile_data}>
              <p className={s.profile_data__number}>{props.user_data.posts_count || "1"}</p>Posts
                </div>
            <div className={s.profile_data}>
              <p className={s.profile_data__number}>{props.user_data.friends_count || "2"}</p>Friends
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_Header;