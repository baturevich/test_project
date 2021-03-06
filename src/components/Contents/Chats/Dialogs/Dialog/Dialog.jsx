import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = React.memo((props) => {

    return <NavLink to={props.url + props.dialog.id} >
        <div className={s.dialog} >
            <img src={props.dialog.photos.small ||  "https://baturevich.ru/images/cn/user2.jpg"}
                alt="User-img" className={`${s.user_img} ${s.online}`} />
            <div className={s.name_and_mess}>
                <p className={s.name}>{props.dialog.name}</p>
                <p className={s.mess}>Lorem, ipsum dolor sit amet consectetu...</p>
            </div>
        </div>
    </NavLink>
});
export default Dialog;