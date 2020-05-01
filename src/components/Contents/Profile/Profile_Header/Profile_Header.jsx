import React from 'react';
import s from './Profile_Header.module.css';
import Profile_Status from './Profile_Status'
const Profile_Header = (props) => {
  debugger;
  let imgUrl = props.user_data.photos.small || "https://baturevich.ru/images/cn/user2.jpg";
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className={`${s.pofile__header}`}>
          <div className={`${s.profile__cover}`} ></div>
          <div className={s.profile__preview}>
            <div className={s.profile__item}>
              <Profile_Status status_data={props.status_data} upStatusDataTC={props.upStatusDataTC}/>
            </div>
            <div className={`${s.profile__item} ${s.profile__item_img_block}`}>
              <img src={imgUrl }
              alt="User_img" className={s.profile__img} />
            </div>
            <div className={`${s.profile__item} d-block`}>
              <h1 className={s.profile__name}>{props.user_data.fullName ? props.user_data.fullName : props.user_data.name}</h1>
            </div>
            <div className={`${s.profile__item} ${s.short_data_content}`}>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.user_data.posts_count}</p>Posts
                </div>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.user_data.friends_count}</p>Friends
                </div>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.user_data.music_count}</p>Music
                </div>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.user_data.videos_count}</p>Videos
                </div>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.user_data.followers_count}</p>Followers
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_Header;