import React from 'react';
import s from './Profile_Posts.module.css'
import Post from '../../../Post/Post';
import Profile_New_Post_Container from './Profile_New_Post/Profile_New_Post_Container';



const Profile_Posts = (props) => {
    let state = props.store.getState();
    let postsElements =
        state.profile_page.posts_data.map(p => <Post name={p.name}
            date={p.date} text={p.text}
            key={p.key}
            likeCounts={p.likeCounts}
            commentCounts={p.commentCounts}
            imgAdress={p.imgAdress} />);

    return (
        <div className={`${s.content} col-sm-8`}>
            <Profile_New_Post_Container store={props.store} />
            {postsElements}
        </div>
    )

};

export default Profile_Posts;