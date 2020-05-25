import React from 'react';
import s from './Messages.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import MessageContainer from './Message/MessageContainer';
import MesagesHeaderContainer from './MessagesHeader/MessagesHeaderContainer';
import { connect } from 'react-redux';

const Messages = (props) => {
    return (
        <div className="col-md-8">
            <div className={s.messages}>
                <MesagesHeaderContainer/>
                <div className={s.all_mes}>
                {props.chats_page.messages_data.map(message =>(
                    <MessageContainer key={Math.random()*10} message={message} />
                ))}        
                </div>    
                <NewMessageContainer/>
            </div>
        </div>
    );
};
let mapStateToProps = (state) => ({chats_page: state.chats_page})

export default connect(mapStateToProps,{})(Messages);