import React, { useEffect } from 'react';
import s from './Profile.module.css';
import Profile_Content from './Profile_Content/Profile_Content';
import Profile_Header_Container from './Profile_Header/Profile_Header_Container';
import { getStatusDataTC, getProfileDataTC } from '../../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Profile = (props) => {
    useEffect(() => {
        let user_id = props.match.params.user_id;
        props.getStatusDataTC(user_id);
        props.getProfileDataTC(user_id);
    }, [])
    useEffect(() => {
        props.getProfileDataTC(props.match.params.user_id);
    }, [props.match.params.user_id])
    return (
        <div className={s.profile}>
            <Profile_Header_Container />
            <Profile_Content />
        </div>
    );
}

export default compose(connect(null, { getStatusDataTC, getProfileDataTC }),withRouter,)(Profile);