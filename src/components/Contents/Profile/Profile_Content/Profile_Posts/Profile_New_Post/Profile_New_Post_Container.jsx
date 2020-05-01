import React from 'react';
import { addPostAC } from '../../../../../../redux/profilePageReducer';
import Profile_New_Post from './Profile_New_Post';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        imgUrl: state.profile_page.user_data.imgUrl 
        ?  state.profile_page.user_data.imgUrl 
        : state.auth_data.user_data_default.imgUrl,

    }
};

const Profile_New_Post_Container =  connect(mapStateToProps,{addPostAC})(Profile_New_Post);



export default Profile_New_Post_Container;