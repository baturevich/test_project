import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
   return props.dialogs_data.map(d => {
        return <NavLink to={"/chats" + "/" + d.id} key={Math.random()*3}>
            <div className={s.dialog} >
                <img src={d.photos.small ? d.photos.small : "https://baturevich.ru/images/cn/user2.jpg"} 
                alt="User-img" className={`${s.user_img} ${s.online}`} />
                <div className={s.name_and_mess}>
                    <p className={s.name}>{d.name}</p>
                    <p className={s.mess}>Lorem, ipsum dolor sit amet consectetu...</p>
                </div>
            </div>
        </NavLink>
    })
};
export default Dialog;