import React from 'react';
import s from './Message.module.css';

const Message = (props) => {

    return (
        <div className={`${s.message_wrapper}`}>
            <div className={`${s.my_message}`}>
                <p className={s.text}>{props.text}</p>
                <div className={s.img_and_date}>
                    <img src={props.imgAdress} alt="User-img" className={s.mes_img} />
                    <p className={s.date}>{props.date}</p>
                </div>
            </div>
        </div>
    );
};

export default Message;