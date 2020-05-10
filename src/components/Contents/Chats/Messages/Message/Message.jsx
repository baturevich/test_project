import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return <div className={`${s.message_wrapper}`}>
        <div className={`${s.my_message}`} >
            <p className={s.text}>{props.message.text}</p>
            <div className={s.img_and_date}>
                <img src={props.message.imgUrl} alt="User-img" className={s.mes_img} />
                <p className={s.date}>{props.message.date}
                    <i className="fa fa-close" onClick={() => props.mess_delete(props.message.id)}></i></p>
            </div>
        </div>
    </div>
};
export default Message;
