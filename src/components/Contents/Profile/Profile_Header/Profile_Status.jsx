import React, { useState, useEffect } from 'react';
import s from './Profile_Header.module.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const Profile_Status = (props) => {
    let isAuthUserProfile = props.match.params.user_id == props.auth_user_id;
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status_data)
    const activEditMode = () => {
        props.match.params.user_id == props.auth_user_id && setEditMode(true)
    }
    useEffect(()=>{
        setStatus(props.status_data)
    },[props.status_data])
    const deActivEditMode = () => {
        setEditMode(false)
        props.upStatusDataTC(status);
    }
    const upStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={s.status}>
            {!editMode
                ? <span onDoubleClick={activEditMode}>{props.status_data || 'No status'}</span>
                : isAuthUserProfile && <input value={status} onChange={upStatus} autoFocus={true} type="text" onBlur={deActivEditMode} />}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        auth_user_id: state.auth_data.data.id
    }
}

export default compose(connect(mapStateToProps, {}), withRouter)(Profile_Status);