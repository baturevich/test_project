import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { delMessAC } from '../../../../../redux/chatsPageReducer';



let mapStateToProps = (state) =>{
    return{
       chats_page: state.chats_page
    }  
}

let mapDispatchToProps = (dispatch) =>{
    return{
        mess_delete: (mess_id)=>{
            dispatch(delMessAC(mess_id))
        }
    }
}
const Message_Container = connect(mapStateToProps,mapDispatchToProps)(Message)

export default Message_Container;