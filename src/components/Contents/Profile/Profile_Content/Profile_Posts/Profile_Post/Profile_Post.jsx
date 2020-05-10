import React from 'react';
import s from './Profile_Post.module.css';

const Profile_Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post_data}>
                <img src={props.post.imgUrl}
                    className={s.user_img} />
                <div className={s.name_and_date}>
                    <p className={s.name}>{props.post.name}</p>
                    <p className={s.date}>{props.post.date}</p>
                </div>
                <div className={s.action} onClick={() => props.deletePostAC(props.post.id)}><i className="fa fa-angle-down"></i></div>
            </div>
            <div className={s.post_content}>
                <p className={s.text_content}>{props.post.text}</p>
            </div>
            <div className={s.like_block}>
                <a href="#s" className={s.like_btn}><i className="fa fa-heart-o"></i>{props.post.likeCounts}</a>
                <a href="#s" className={s.komments_btn}><i className="fa fa-comment-o"></i>{props.post.commentCounts}</a>
            </div>
        </div>
    );
};
export default Profile_Post;