import React from 'react';
import Profile_Post from './Profile_Post';
import { connect } from 'react-redux';
import { deletePostAC } from '../../../../../../redux/profilePageReducer';

const Profile_Post_Container = (props) => (
    <Profile_Post post={props.post} deletePostAC={props.deletePostAC} />
)
export default connect(null, { deletePostAC })(Profile_Post_Container);