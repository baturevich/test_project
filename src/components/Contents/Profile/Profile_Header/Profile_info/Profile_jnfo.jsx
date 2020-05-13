import React, { useState, useEffect } from 'react';
import s from '../Profile_Header.module.css';
import Edit_Profile_Info from './Edit_Profile_Info';



const Profile_Info = (props) => {
    let [viewMoreInfo, setViewMoreInfo] = useState(false)
    let [editMode, setEditMode] = useState(false)

    const onEditInfo = (formData)=>{
        let profile_data = { ...formData, fullName: "Kirill Baturevich" }
        props.updateProfileInfoTC(profile_data)
        setEditMode(false)
    }

    if (!viewMoreInfo) {
        return <div className={s.more_info}>
            <button className={s.show_more} onClick={() => setViewMoreInfo(true)}>
                Show more information
                <i className="fa fa-angle-down"></i>
            </button>
        </div>
    } return (
        <div className={s.more_info}>
            {props.isOwner && !editMode &&
                <span className={props.device != "mobile" ? s.edit_info: s.edit_info_mobile} 
                onClick={()=>setEditMode(true)}> 
                    <i className="material-icons">edit</i>Edit 
                </span>}
            {editMode
                ? <Edit_Profile_Info device={props.device} user_data={props.user_data} initialValues={props.user_data}
                onSubmit={onEditInfo} setEditMode={setEditMode}/>
                : <User_More_Data user_data={props.user_data} />
            }
            <button className={s.hide_more} onClick={() => setViewMoreInfo(false)}>
                Hide more information<i className="fa fa-angle-up"></i>
            </button>
        </div>
    );
};
const User_More_Data = (props) => {
    return (
        <div className={s.user_features}>
            <div className={s.user_data_names}>
                <p>About me:</p>
                <p>look for work:</p>
                <p>"look for work desciption:"</p>
                {Object.keys(props.user_data.contacts).map(key => (
                    <p key={Math.random()*10}>{props.user_data.contacts[key] && key}</p>))}
            </div>
            <div className={s.user_data_answers}>
                <p>{props.user_data.aboutMe || "Data is not defined"}</p>
                <p>{props.user_data.lookingForAJob ? "Yes": "No"}</p>
                <p>{props.user_data.lookingForAJobDescription}</p>
                {Object.keys(props.user_data.contacts).map(key => <p key={Math.random()*10}>
                    {props.user_data.contacts[key]}</p>)}
            </div>
        </div>
    );
}



export default Profile_Info;