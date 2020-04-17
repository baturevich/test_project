import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let name = props.name;
    let path = props.path;
    return (
        <NavLink to={"/chats" + path}>
        <div className={s.dialog}>
            <img src={props.imgAdress} alt="User-img" className={`${s.user_img} ${s.online}`} />
            <div className={s.name_and_mess}>
                <p className={s.name}>{name}</p>
                <p className={s.mess}>Lorem, ipsum dolor sit amet consectetu...</p>
            </div>
        </div>
        </NavLink>
    );
};
export default Dialog;