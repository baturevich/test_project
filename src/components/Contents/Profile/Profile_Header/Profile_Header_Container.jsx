import React, { useState } from 'react';
import Profile_Header from './Profile_Header';
import { connect } from 'react-redux';
import {
    getProfileDataTC, getStatusDataTC,upStatusDataTC,
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
                : <Profile_Header 
                    user_data={props.user_data}
                    user_data_default={props.user_data_default}
                    status_data={props.status_data}
                    upStatusDataTC={props.upStatusDataTC}                 
                />
            }
        </>

    )
}
let mapStateToProps = (state) => {
    if (state.profile_page.user_data.fullName) {
        return {
            user_data: getProfileUserData(state),
            isLoading: getProfileIsLoading(state),
            status_data: state.profile_page.status_data,
        }
    } else {
        return {
            user_data: state.profile_page.user_data_default,
            isLoading: getProfileIsLoading(state),
            status_data: state.profile_page.status_data,
        }
    }
};

export default compose(
    connect(mapStateToProps, { getProfileDataTC, getStatusDataTC, upStatusDataTC, }),
    withRouter,
)(Profile_Header_Container) 
