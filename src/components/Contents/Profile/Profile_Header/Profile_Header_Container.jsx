import React, { useState } from 'react';
import Profile_Header from './Profile_Header';
import { connect } from 'react-redux';
import {
    getProfileDataTC, getStatusDataTC, upStatusDataTC,
} from '../../../../redux/profilePageReducer';
import { getProfileIsLoading, getProfileUserData } from '../../../../redux/selectors';
import Preloader from '../../../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


const Profile_Header_Container = (props) => {
    return (
        <>
            {props.isLoading == true
                ? <Preloader />
                : props. isSetProfileData && <Profile_Header
                    user_data={props.user_data}
                    user_data_default={props.user_data_default}
                />
            }
        </>

    )
}
let mapStateToProps = (state) => {
    return {
        user_data: getProfileUserData(state),
        isLoading: getProfileIsLoading(state),
        isSetProfileData: state.profile_page.isSetProfileData,
    }
};

export default compose(
    connect(mapStateToProps, { getProfileDataTC, getStatusDataTC, upStatusDataTC, }),
    withRouter,
)(Profile_Header_Container) 
