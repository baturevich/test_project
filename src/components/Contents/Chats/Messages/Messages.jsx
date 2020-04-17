import React from 'react';
import s from './Messages.module.css';
import Mes_Header from './Mes_Header/Mes_header';
import Message from './Message/Message';
import New_Message_Container from './New_Message/New_message_Container';
import StoreContext from '../../../../StoreContext';

const Messages = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                
                let state = store.getState().chats_page;
                //Maping
                let mes_header = 
                state.mes_header_data.map(h => <Mes_Header name={h.name} imgAdress={h.imgAdress} date={h.date} />)
                let messagesElement =
                    state.messages_data.map(m => <Message name={m.name} text={m.text} imgAdress={m.imgAdress} date={m.date} />);
                
                //
                return (
                    <div className="col-md-8">
                        <div className={s.messages}>
                            {mes_header}
                            <div className={s.all_mes}>
                                {messagesElement}
                            </div>
                            <New_Message_Container
                                store={store}
                            />
                        </div>
                    </div>
                );
            }}
        </StoreContext.Consumer>
    );


};

export default Messages;