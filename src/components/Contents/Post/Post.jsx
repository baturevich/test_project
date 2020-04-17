import React from 'react';
import s from './Post.module.css';
import { getByTestId } from '@testing-library/react';

const Post = (props) => {
    let name = props.name;
    let date = props.date;
    let text = props.text;
    let likeCounts = props.likeCounts;
    let commentCounts = props.commentCounts;
    let imgAdress = props.imgAdress;
    return (
        <div className={s.post}>
            <div className={s.post_data}>
                <img src={imgAdress}
                    className={s.user_img} />
                <div className={s.name_and_date}>
                    <p className={s.name}>{name}</p>
                    <p className={s.date}>{date}</p>
                </div>
                <div className={s.action}><i className="fa fa-angle-down"></i></div>
            </div>
            <div className={s.post_content}>
                <p className={s.text_content}>{text}</p>
            </div>
            <div className={s.like_block}>
                <a href="#s" className={s.like_btn}><i className="fa fa-heart-o"></i>{likeCounts}</a>
                <a href="#s" className={s.komments_btn}><i className="fa fa-comment-o"></i>{commentCounts}</a>
            </div>

        </div>
    );
};
export default Post;