import React from 'react';
import s from './Profile_Posts.module.css'
import Post from '../../../Post/Post';
import Profile_New_Post_Container from './Profile_New_Post/Profile_New_Post_Container';
import StoreContext from '../../../../../StoreContext';



const Profile_Posts = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let postsElements =
                    state.profile_page.posts_data.map(p => <Post name={p.name}
                        date={p.date} text={p.text}
                        likeCounts={p.likeCounts}
                        commentCounts={p.commentCounts}
                        imgAdress={p.imgAdress} />);
                return (
                    <div className={`${s.content} col-sm-8`}>
                        <Profile_New_Post_Container store={store} />
                        {postsElements}
                    </div>
                );
            }}
        </StoreContext.Consumer>
    )

};

export default Profile_Posts;