import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return props.chats_page.messages_data.map(m => {
        return (
        <div className={`${s.message_wrapper}`}>
            <div className={`${s.my_message}`}>
                <p className={s.text}>{m.text} </p>
                <div className={s.img_and_date}>
                    <img src={m.imgAdress} alt="User-img" className={s.mes_img} />
                    <p className={s.date}>{m.date}<i className="fa fa-close" onClick={()=>props.mess_delete(m.id)}></i></p>
                </div>
            </div>
        </div>
        );
    })
};   
export default Message;
