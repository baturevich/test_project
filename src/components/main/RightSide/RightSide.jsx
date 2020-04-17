import React from 'react';
import s from './RightSide.module.css'

const RigthSide = () =>{
    return(
        <section className={s.right_side}>
            <div className={s.recent_users}>
                <div className={`${s.recent_users__item} ${s.user_online}`}>
                    <img src="https://baturevich.ru/images/cn/user_img.jpg" alt="User" className={`${s.recent_users__img}`}/>
                </div>
                <div className={`${s.recent_users__item}`}>
                   <img src="https://baturevich.ru/images/cn/user_img.jpg" alt="User" className={`${s.recent_users__img}`}/>
                </div>
                <div className={`${`${s.recent_users__item}`}`}>
                   <img src="https://baturevich.ru/images/cn/user_img.jpg" alt="User" className={`${s.recent_users__img}`}/>
                </div>
                <div className={`${s.recent_users__item}`}>
                   <img src="https://baturevich.ru/images/cn/user_img.jpg" alt="User" className={`${s.recent_users__img}`}/>
                </div>
                <div className={`${s.recent_users__item}`}>
                   <img src="https://baturevich.ru/images/cn/user_img.jpg" alt="User" className={`${s.recent_users__img}`}/>
                </div>
            </div>
        </section>
    );
};

export default RigthSide;