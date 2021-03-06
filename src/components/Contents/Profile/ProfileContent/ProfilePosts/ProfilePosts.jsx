import React from 'react';
import s from './ProfilePosts.module.css'
import ProfileNewPostContainer from './ProfileNewPost/ProfileNewPostContainer';
import { connect } from 'react-redux';
import ProfilePostContainer from './ProfilePost/ProfilePostContainer';


const ProfilePosts = (props) => {
    return (
        <div className={`${s.content} col-sm-7`}>
            <ProfileNewPostContainer />

            {[...props.profile_page.posts_data].reverse().map(post => (
            <ProfilePostContainer key={Math.random() *10 } post={post}/>)
            )}
        </div>
    )
};
const mapStateToProps = (state) => ({profile_page: state.profile_page})
export default connect(mapStateToProps, {})(ProfilePosts);