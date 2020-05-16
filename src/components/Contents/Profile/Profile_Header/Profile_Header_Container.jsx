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
    const [viewMoreInfo, setViewMoreInfo] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const toggleEditMode = (answer)=>{
        setViewMoreInfo(answer)
        setEditMode(answer)
    }
    return (
        <>
            {props.profile_page.isLoading == true
                ? <Preloader />
                : props.profile_page.isSetProfileData && <Profile_Header           
                    isOwner={isOwner}
                    editMode={editMode}                   
                    viewMoreInfo={viewMoreInfo}
                    profile_page={props.profile_page}
                    device={props.device}
                    toggleEditMode={toggleEditMode}
                    setEditMode={setEditMode}
                    setViewMoreInfo={setViewMoreInfo}
                    updateProfileInfoTC={props.updateProfileInfoTC}
                />
            }
        </>

    )
}
let mapStateToProps = (state) => {
    return {
        profile_page: state.profile_page,
        auth_user_id: state.auth_data.data.id,
        device: state.app.device
    }
};

export default compose(
    connect(mapStateToProps, { getProfileDataTC, getStatusDataTC, upStatusDataTC,updateProfileInfoTC, }),
    withRouter,
)(Profile_Header_Container) 
