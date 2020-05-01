import React from 'react';
import s from './Messages.module.css';
import New_Message_Container from './New_Message/New_message_Container';
import Message_Container from './Message/Message_Container';
import Mes_header_Container from './Mes_Header/Mes_header_Container';


const Messages = (props) => {
    return (
        <div className="col-md-8">
            <div className={s.messages}>
                <Mes_header_Container/>
                <div className={s.all_mes}>
                    <Message_Container />
                </div>
                <New_Message_Container/>
            </div>
        </div>
    );

};

export default Messages;