import React from 'react';
import { addPostActionCreate, upNewPostTextActionCreate } from '../../../../../../redux/addPostReducer';
import Profile_New_Post from './Profile_New_Post';


const Profile_New_Post_Container = (props) => {
    let state = props.store.getState().profile_page.new_post_data[0];

    let add_post = () => {
        props.store.dispatch(addPostActionCreate());
    };
    const up_new_post_text = (post_text) => {
        props.store.dispatch(upNewPostTextActionCreate(post_text));
    };

    return (
        <Profile_New_Post add_post={add_post} 
        up_new_post_text={up_new_post_text} 
        imgAdress={state.imgAdress} new_post_text={state.new_post_text}
        />
        
    );
};
export default Profile_New_Post_Container;