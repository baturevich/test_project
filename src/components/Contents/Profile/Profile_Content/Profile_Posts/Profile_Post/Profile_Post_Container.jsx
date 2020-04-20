import React from 'react';
import { connect } from 'react-redux';
import Profile_Post from './Profile_Post'
import {deletePostAC} from '../../../../../../redux/profilePageReducer'



let mapStateToProps = (state) =>{
    return{
       profile_page: state.profile_page
    }  
}

let mapDispatchToProps = (dispatch) =>{
    return{
        delete_post: (post_id)=>{
            dispatch(deletePostAC(post_id));
        }
    }
}
const Profile_Post_Container = connect(mapStateToProps,mapDispatchToProps)(Profile_Post)

export default Profile_Post_Container;