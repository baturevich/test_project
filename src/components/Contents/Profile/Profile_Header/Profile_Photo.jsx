import React from 'react';
import s from './Profile_Header.module.css'
import { connect } from 'react-redux';
import { getProfileUserData } from '../../../../redux/selectors';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { uploadPhotoTC } from '../../../../redux/profilePageReducer';
import { useState } from 'react';
import { reqAuthPhoto } from '../../../../redux/authReducer';

const Profile_Photo = (props) => {
    let [settingPhoto, setSettingPhoto] = useState(false)
    const onUploadPhoto = (e) => {
        if (e.target.files.length) {
            setSettingPhoto(true)
            let promise = props.uploadPhotoTC(e.target.files[0])
            Promise.all([promise])
                .then(()=>{
                    setSettingPhoto(false)
                    reqAuthPhoto(props.auth_user_id)
                })
        }
    }
    return (
        <div className={`${s.profile__item} ${s.profile__item_img_block}`}>
            {settingPhoto
                ? <div className={s.setting_photo}>
                    <p className={s.setting_text}>Setting photo...</p>
                </div>
                : <> <img src={
                        props.user_data.photos.large || "https://baturevich.ru/images/cn/user2.jpg"} 
                        alt="User_img" className={s.profile__img} />
                    {props.match.params.user_id == props.auth_user_id &&
                        <label className={s.upload_photo}>
                            <i className="material-icons">get_app</i>
                            <input type="file" onChange={onUploadPhoto} />
                        </label>
                    }</>
            }
        </div>
    );
}
const mapStateToprops = (state) => {
    return {
        user_data: getProfileUserData(state),
        auth_user_id: state.auth_data.data.id,
    }
}
export default compose(connect(mapStateToprops,{ uploadPhotoTC,reqAuthPhoto}),withRouter)(Profile_Photo);