import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { delMessAC } from '../../../../../redux/chatsPageReducer';


class Message_Container extends React.Component {
    state = {
        viewDelBtn: false
    }
    showDelBtn = () => {
        console.log(this.state.viewDelBtn);
        this.setState({viewDelBtn: true,});
    };
    hideDelBtn = ()=>{
        this.setState({viewDelBtn: false,});
    }
    render() {
        return <Message
            chats_page={this.props.chats_page}
            mess_delete={this.props.mess_delete}
            viewDelBtn={this.props.viewDelBtn}
            showDelBtn={this.showDelBtn}
            hideDelBtn={this.hideDelBtn}
            />
    }
}
let mapStateToProps = (state) => {
    return {
        chats_page: state.chats_page
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        mess_delete: (mess_id) => {
            dispatch(delMessAC(mess_id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Message_Container);