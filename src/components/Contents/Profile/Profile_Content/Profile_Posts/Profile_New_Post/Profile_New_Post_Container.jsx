import React from 'react';
import { addPostAC, upNewPostTextAC } from '../../../../../../redux/profilePageReducer';
import Profile_New_Post from './Profile_New_Post';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        imgUrl: state.profile_page.user_data.imgUrl ?  state.profile_page.user_data.imgUrl : state.profile_page.user_data_default.imgUrl,
        new_post_text: state.profile_page.new_post_data.new_post_text,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        up_new_post_text: (post_text) => {
            dispatch(upNewPostTextAC(post_text));
        },
        add_post: () => {
            dispatch(addPostAC());
        },     
    }
}


const Profile_New_Post_Container =  connect(mapStateToProps,mapDispatchToProps)(Profile_New_Post);



export default Profile_New_Post_Container;