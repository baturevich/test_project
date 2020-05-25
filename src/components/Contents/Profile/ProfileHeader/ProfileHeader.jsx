import React from 'react';
import s from './ProfileHeader.module.scss';
import ProfileStatus from './ProfileStatus'
import { NavLink, } from 'react-router-dom';
import ProfileInfo from './Profileinfo/Profilejnfo';
import ProfilePhoto from './ProfilePhoto';
import ProfileCounter from './ProfileCounter';

const ProfileHeader = (props) => {
  return (
    <div className={s.profile__info}>
      <div className="row">
        <div className="col-md-3 col-xs-12 col-sm-12">
          <ProfilePhoto user_data={props.profile_page.user_data} isAuthUserProfile={props.isAuthUserProfile} />
          <div className={s.assets}>
            {!props.isOwner
              ? <div className={s.button_group}>
                <button>Follow</button>
                <NavLink to={`/chats/${+props.profile_page.user_data.userId}`} >New Message</NavLink>
              </div>
              : !props.editMode
                ? <button className={s.edit_btn} onClick={()=>props.toggleEditMode(true)}>
                  <i className="material-icons">edit</i> Edit</button>
                : <button className={s.edit_btn} onClick={()=>props.toggleEditMode(false)}>
                  Close</button>
            }
          </div>
        </div>
        <div className="col-md-9 col-xs-12 col-sm-12">
          <div className={s.main_info}>
            <div className={`${s.profile__item} ${s.main_info_item} d-block`}>
              <h1 className={s.profile__name}>{props.profile_page.user_data.fullName || "No name"}
              </h1>
              <ProfileStatus status_data={props.profile_page.status_data} />
            </div>
            <div className={`${s.main_info_item}`}>
              <ProfileInfo user_data={props.profile_page.user_data} isOwner={props.isOwner}
                device={props.device} isOwner={props.isOwner}
                setViewMoreInfo={props.setViewMoreInfo}
                setEditMode={props.setEditMode}
                viewMoreInfo={props.viewMoreInfo} editMode={props.editMode}
                updateProfileInfoTC={props.updateProfileInfoTC} />
            </div>
            <ProfileCounter user_data={props.profile_page.user_data} posts_data={props.profile_page.posts_data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;