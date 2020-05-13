import React, { useState } from 'react';
import Profile_Header from './Profile_Header';
import { connect } from 'react-redux';
import {
    getProfileDataTC, getStatusDataTC, upStatusDataTC, updateProfileInfoTC,
} from '../../../../redux/profilePageReducer';
import { getProfileIsLoading, getProfileUserData } from '../../../../redux/selectors';
import Preloader from '../../../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { isAuthUserPage } from '../../../../utils/isAuthUserPage';


const Profile_Header_Container = (props) => {
    const isOwner = isAuthUserPage(props.auth_user_id, props.match.params.user_id )
    return (
        <>
            {props.isLoading == true
                ? <Preloader />
                : props. isSetProfileData && <Profile_Header
                    user_data={props.user_data}
                    user_data_default={props.user_data_default}
                    isOwner={isOwner}
                    posts_data={props.posts_data}
                    device={props.device}
                    updateProfileInfoTC={props.updateProfileInfoTC}
                />
            }
        </>

    )
}
let mapStateToProps = (state) => {
    return {
        posts_data : state.profile_page.posts_data,
        user_data: getProfileUserData(state),
        isLoading: getProfileIsLoading(state),
        isSetProfileData: state.profile_page.isSetProfileData,
        auth_user_id: state.auth_data.data.id,
        device: state.app.device
    }
};

export default compose(
    connect(mapStateToProps, { getProfileDataTC, getStatusDataTC, upStatusDataTC,updateProfileInfoTC, }),
    withRouter,
)(Profile_Header_Container) 
