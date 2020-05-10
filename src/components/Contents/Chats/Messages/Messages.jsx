import React from 'react';
import s from './Messages.module.css';
import New_Message_Container from './New_Message/New_message_Container';
import Message_Container from './Message/Message_Container';
import Mes_header_Container from './Mes_Header/Mes_header_Container';
import { connect } from 'react-redux';

const Messages = (props) => {
    return (
        <div className="col-md-8">
            <div className={s.messages}>
                <Mes_header_Container/>
                <div className={s.all_mes}>
                {props.chats_page.messages_data.map(message =>(
                    <Message_Container key={Math.random()*10} message={message} />
                ))}        
                </div>    
                <New_Message_Container/>
            </div>
        </div>
    );
};
let mapStateToProps = (state) => ({chats_page: state.chats_page})

export default connect(mapStateToProps,{})(Messages);