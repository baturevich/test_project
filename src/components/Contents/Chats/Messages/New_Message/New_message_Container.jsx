import React from 'react';
import { upNewMessTextActionCreate, addMessActionCreate } from '../../../../../redux/addMessReducer';
import New_Message from './New_Message';
import { connect } from 'react-redux';


// const New_Message_Container = (props) => {
//     let state = props.store.getState();
//     const up_new_mess_text = (mess_text) => {
//         props.store.dispatch(upNewMessTextActionCreate(mess_text))
//     }
//     const add_mess = () => {
//         props.store.dispatch(addMessActionCreate())
//     }
//     return (
//         <New_Message up_new_mess_text={up_new_mess_text} 
//         add_mess={add_mess}
//         new_message_data={state.chats_page.new_message_data}
//         />
//     );
// };
const mapStateToProps = (state)=>{
    return{
        new_message_data: state.chats_page.new_message_data,
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