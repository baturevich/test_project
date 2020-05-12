import React from 'react';
import { addPostAC } from '../../../../../../redux/profilePageReducer';
import Profile_New_Post from './Profile_New_Post';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

const Profile_New_Post_Container = (props) => {
    const onAddPost = (values) => {
        props.addPostAC(values.newPostText);
        props.reset('newProfilePostForm');
    };
    return <Profile_New_Post onAddPost={onAddPost} imgUrl={props.imgUrl} />
};

let mapStateToProps = (state) => ({imgUrl: state.auth_data.photos.small,})

export default connect(mapStateToProps, { addPostAC, reset })(Profile_New_Post_Container);