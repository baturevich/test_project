import React from 'react';
import Profile_Post from './Profile_Post';
import { connect } from 'react-redux';
import { deletePost } from '../../../../../../redux/profilePageReducer';

const Profile_Post_Container = (props) => (
    <Profile_Post post={props.post} deletePost={props.deletePostAC} />
)
export default connect(null, { deletePost })(Profile_Post_Container);