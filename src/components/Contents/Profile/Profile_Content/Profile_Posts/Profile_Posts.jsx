import React from 'react';
import s from './Profile_Posts.module.css'
import Profile_New_Post_Container from './Profile_New_Post/Profile_New_Post_Container';
import { connect } from 'react-redux';
import Profile_Post_Container from './Profile_Post/Profile_Post_Container';


const Profile_Posts = (props) => {
    return (
        <div className={`${s.content} col-sm-7`}>
            <Profile_New_Post_Container />

            {[...props.profile_page.posts_data].reverse().map(post => (
            <Profile_Post_Container key={Math.random() *10 } post={post}/>)
            )}
        </div>
    )
};
const mapStateToProps = (state) => ({profile_page: state.profile_page})
export default connect(mapStateToProps, {})(Profile_Posts);