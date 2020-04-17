import React from 'react';
import s from './Profile_Header.module.css';

const Profile_Header = (props) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className={`${s.pofile__header}`}>
          <div className={`${s.profile__cover}`} ></div>
          <div className={s.profile__preview}>
            <div className={s.profile__item}>
              <ul className={s.soc_net_on_profile}>
                <li className={s.soc_net_on_profile__item}><a href="##"><i className="fa fa-vk"></i></a></li>
                <li className={s.soc_net_on_profile__item}><a href="##"><i className="fa fa-facebook"></i></a></li>
                <li className={s.soc_net_on_profile__item}><a href="##"><i className="fa fa-instagram"></i></a></li>
                <li className={s.soc_net_on_profile__item}><a href="##"><i className="fa fa-paper-plane-o"></i></a></li>
              </ul>
            </div>
            <div className={`${s.profile__item} ${s.profile__item_img_block}`}><img src={props.imgAdress}
              alt="Kirill Baturevich" className={s.profile__img} />
            </div>
            <div className={`${s.profile__item} d-block`}>
              <h1 className={s.profile__name}>{props.name}</h1>
            </div>
            <div className={`${s.profile__item} ${s.short_data_content}`}>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.posts_count}</p>Posts
                </div>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.friends_count}</p>Friends
                </div>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.music_count}</p>Music
                </div>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.videos_count}</p>Videos
                </div>
              <div className={s.profile_data}>
                <p className={s.profile_data__number}>{props.followers_count}</p>Followers
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_Header;