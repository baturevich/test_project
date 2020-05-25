import React from 'react';
import s from './ProfileNewPost.module.css';
import { reduxForm, Field } from 'redux-form';


const Profile_New_Post = (props) => {
    return (
        <div className={s.content}>
            <div className={s.preview}>
                <h1 className={s.title}>Create Post</h1>
            </div>
            <NewProfilePostFormRedux {...props} onSubmit={props.onAddPost}/>
        </div>
    );
};


const NewProfilePostForm = (props)=>{
    return(
        <form className={s.post} onSubmit={props.handleSubmit}>
                <div className={s.wrapper}>
                    <img src={props.imgUrl} alt="User-img" className={s.user_img} />
                    <Field name="newPostText" component={'textarea'} className={s.post_text} />
                </div>
                <div className={s.btn_group}>
                    <button className={s.btn}>Post</button>
                </div>
            </form>
    );
}

 const NewProfilePostFormRedux = reduxForm({form:'newProfilePostForm'})(NewProfilePostForm);
export default Profile_New_Post;