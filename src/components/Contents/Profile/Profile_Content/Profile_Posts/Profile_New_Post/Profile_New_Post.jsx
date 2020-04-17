import React from 'react';
import s from './Profile_New_Post.module.css';


const Profile_New_Post = (props) => {

    let newPostEl = React.createRef();
    let addPost = () => {
        props.add_post()
    };
    const upNewPostText = () => {
        let post_text = newPostEl.current.value;
        props.up_new_post_text(post_text)

    };
    let addPostOnEnter = (event) => {
        event = event || window.event;
        if (event.keyCode == 13) {
            props.add_post()
        } return
    };

    return (
        <div className={s.content}>
            <div className={s.preview}>
                <h1 className={s.title}>Create Post</h1>
            </div>
            <div className={s.post}>
                <div className={s.wrapper}>
                    <img src={props.imgAdress} alt="User-img" className={s.user_img} />
                    <textarea name="New post"
                        className={s.post_text}
                        onChange={() => upNewPostText()}
                        value={props.new_post_text}
                        ref={newPostEl}
                        onKeyDown={() => addPostOnEnter()} />
                </div>
                <div className={s.btn_group}>
                    <a href="#s" className={s.btn} onClick={() => addPost()} >Post</a>
                </div>
            </div>
        </div>
    );
};
export default Profile_New_Post;