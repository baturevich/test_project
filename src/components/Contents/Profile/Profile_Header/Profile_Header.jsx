import React from 'react';
import s from './Profile_Header.module.css';
import Profile_Status from './Profile_Status'
import { NavLink, } from 'react-router-dom';
import Profile_Info from './Profile_info/Profile_jnfo';
import Profile_Photo from './Profile_Photo';
import Profile_Counter from './Profile_Counter';

const Profile_Header = (props) => {
  return (
    <div className={s.profile__info}>
      <div className="row">
        <div className="col-md-3 col-xs-12 col-sm-12">
          <Profile_Photo user_data={props.user_data} isAuthUserProfile={props.isAuthUserProfile} />
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
          <Profile_Info user_data={props.user_data} device={props.device} isOwner={props.isOwner} 
            updateProfileInfoTC={props.updateProfileInfoTC}/>  
          </div>
          <Profile_Counter user_data={props.user_data} posts_data={props.posts_data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Profile_Header;