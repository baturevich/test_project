import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { delMess } from '../../../../../redux/chatsPageReducer';

const MessageContainer = (props)=>(
    <Message mess_delete={props.delMess} message={props.message}/>
)

export default connect(null, {delMess})(MessageContainer);