import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { delMessAC } from '../../../../../redux/chatsPageReducer';

const Message_Container = (props)=>(
    <Message mess_delete={props.delMessAC} message={props.message}/>
)

export default connect(null, {delMessAC})(Message_Container);