import React from 'react';
import s from './Messages.module.css';
import Mes_Header from './Mes_Header/Mes_header';
import New_Message_Container from './New_Message/New_message_Container';
import Message_Container from './Message/Message_Container';


const Messages = (props) => {

    let state = props.store.getState().chats_page;
    return (
        <div className="col-md-8">
            <div className={s.messages}>
                <Mes_Header name={state.mes_header_data[0].name} 
                imgAdress={state.mes_header_data[0].imgAdress} 
                date={state.mes_header_data[0].date} />
                <div className={s.all_mes}>
                    <Message_Container />
                </div>
                <New_Message_Container
                    store={props.store}
                />
            </div>
        </div>
    );

};

export default Messages;