import React from 'react';
import s from '../Profile_Header.module.scss';
import Edit_Profile_Info from './Edit_Profile_Info';

const Profile_Info = (props) => {

    const onEditInfo = (formData) => {
        let profile_data = { ...formData, fullName: "Kirill Baturevich" }
        props.updateProfileInfoTC(profile_data)
        props.setEditMode(false)
    }

    if (!props.viewMoreInfo && !props.isOwner) {
        return <div className={s.more_info}>
            <button className={s.show_more} onClick={() => props.setViewMoreInfo(true)}>
                Show more information
                <i className="fa fa-angle-down"></i>
            </button>
        </div>
    } return (
        <div className={s.more_info}>
            {props.editMode
                ? <Edit_Profile_Info setEditMode={props.setEditMode} device={props.device} 
                    user_data={props.user_data} initialValues={props.user_data}
                    onSubmit={onEditInfo} setEditMode={props.setEditMode} />
                : <div className={s.user_features}>
                    <ul className={s.features_list}>
                        <li>About me:</li>
                        <li>look for work:</li>
                        {Object.keys(props.user_data.contacts).map(key => (
                            <li key={Math.random() * 10} className={s.contacts_item}>{props.user_data.contacts[key] && key}</li>))}
                    </ul>
                    <ul className={s.answers_list}>
                        <li>{props.user_data.aboutMe || "Data is not defined"}</li>
                        <li>{props.user_data.lookingForAJob ? "Yes" : "No"}</li>
                        {Object.keys(props.user_data.contacts).map(key => (
                            <li key={Math.random() * 10}>{props.user_data.contacts[key]}</li>))}
                    </ul>
                </div>
            }
            {!props.isOwner &&
                <button className={s.hide_more} onClick={() => props.setViewMoreInfo(false)}>
                    Hide more information<i className="fa fa-angle-up"></i>
                </button>
            }
        </div>
    );
};

export default Profile_Info;