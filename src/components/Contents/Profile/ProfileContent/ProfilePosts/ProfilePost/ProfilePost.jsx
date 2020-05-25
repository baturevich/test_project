import React from 'react';
import s from './ProfilePost.module.css';
import { useState } from 'react';

const ProfilePost = (props) => {
    let [likesCount, setlikesCount] = useState(0)
    const clickOnLike = ()=>{
        if(likesCount == 0){
            setlikesCount(likesCount+1)
        }else{
            setlikesCount(likesCount-1)
        }
    }
    return (
        <div className={s.post}>
            <div className={s.post_data}>
                <img src={props.post.imgUrl}
                    className={s.user_img} />
                <div className={s.name_and_date}>
                    <p className={s.name}>{props.post.name}</p>
                    <p className={s.date}>{props.post.date}</p>
                </div>
                <div className={s.action} onClick={() => props.deletePostAC(props.post.id)}><i className="material-icons">clear</i></div>
            </div>
            <div className={s.post_content}>
                <p className={s.text_content}>{props.post.text}</p>
            </div>
            <div className={s.like_block}>
                <a onClick={clickOnLike} className={likesCount == 0 ? s.like_btn: s.like_btn_active}>
                    <i className={likesCount == 0  ? "fa fa-heart-o":  "fa fa-heart"}></i>{likesCount}
                </a>
                <a href="##" className={s.komments_btn}><i className="fa fa-comment-o"></i>{props.post.commentCounts}</a>
            </div>
        </div>
    );
};
export default ProfilePost;