import React from 'react';
import s from './Profile_Post.module.css';

const Profile_Post = (props) => {
    return props.profile_page.posts_data.map(p => {
        return (
            <div className={s.post}>
                <div className={s.post_data}>
                    <img src={p.imgUrl}
                        className={s.user_img} />
                    <div className={s.name_and_date}>
                        <p className={s.name}>{p.name}</p>
                        <p className={s.date}>{p.date}</p>
                    </div>
                    <div className={s.action} onClick={ ()=> props.deletePostAC(p.id) }><i className="fa fa-angle-down"></i></div>
                </div>
                <div className={s.post_content}>
                    <p className={s.text_content}>{p.text}</p>
                </div>
                <div className={s.like_block}>
                    <a href="#s" className={s.like_btn}><i className="fa fa-heart-o"></i>{p.likeCounts}</a>
                    <a href="#s" className={s.komments_btn}><i className="fa fa-comment-o"></i>{p.commentCounts}</a>
                </div>

            </div>
        );
    });
};
export default Profile_Post;