import React from 'react';
import { addPost } from '../../../../../../redux/profilePageReducer';
import ProfileNewPost from './ProfileNewPost';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

const ProfileNewPostContainer = (props) => {
    const onAddPost = (values) => {
        props.addPost(values.newPostText);
        props.reset('newProfilePostForm');
    };
    return <ProfileNewPost onAddPost={onAddPost} imgUrl={props.imgUrl} />
};

let mapStateToProps = (state) => ({imgUrl: state.auth_data.photos.small,})

export default connect(mapStateToProps, { addPost, reset })(ProfileNewPostContainer);