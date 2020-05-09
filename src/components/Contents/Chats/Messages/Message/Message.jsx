import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return props.chats_page.messages_data.map(m => {
        return (
            <div className={`${s.message_wrapper}`} key={Math.random()*3}>
                <div className={`${s.my_message}`} 
                onMouseEnter={()=>props.showDelBtn()}  onMouseLeave={()=>props.hideDelBtn()}>
                    <p className={s.text}>{m.text}
                        {props.viewDelBtn ? <i className="fa fa-close" onClick={() => props.mess_delete(m.id)}></i> : null}
                    </p>
                    <div className={s.img_and_date}>
                        <img src={m.imgUrl} alt="User-img" className={s.mes_img} />
                        <p className={s.date}>{m.date}</p>
                    </div>
                </div>
            </div>
        );
    })
};
export default Message;
