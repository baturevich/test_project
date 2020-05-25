import React from 'react';
import ProfilePost from './ProfilePost';
import { connect } from 'react-redux';
import { deletePost } from '../../../../../../redux/profilePageReducer';

const ProfilePostContainer = (props) => (
    <ProfilePost post={props.post} deletePost={props.deletePostAC} />
)
export default connect(null, { deletePost })(ProfilePostContainer);