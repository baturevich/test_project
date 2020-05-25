import React from 'react';
import { addMess } from '../../../../../redux/chatsPageReducer';
import { connect } from 'react-redux';
import NewMessage from './NewMessage';
import { reset } from 'redux-form';

const NewMessageContainer = (props)=> {
    const onAddMess = (values) => {
        props.addMess(values.newMessText);
        props.reset('NewMessageForm');
    }
     return <NewMessage onSubmit={onAddMess} />
};



export default connect(null, { addMess, reset })(NewMessageContainer);