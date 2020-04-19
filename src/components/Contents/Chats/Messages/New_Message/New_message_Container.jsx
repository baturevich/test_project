import React from 'react';
import { upNewMessTextActionCreate, addMessActionCreate } from '../../../../../redux/chatsPageReducer';
import New_Message from './New_Message';
import { connect } from 'react-redux';


const mapStateToProps = (state)=>{
    return{
        new_message_text: state.chats_page.new_message_data.new_message_text,
    }
}
const mapDispathToProps = (dispatch) =>{
    return{
        up_new_mess_text : (mess_text) => {
            dispatch(upNewMessTextActionCreate(mess_text))
        },
        add_mess: () => {
            dispatch(addMessActionCreate())
        }
    }
}

const New_Message_Container = connect(mapStateToProps,mapDispathToProps)(New_Message);

export default New_Message_Container;