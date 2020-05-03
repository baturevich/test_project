import React from 'react';
import Mes_Header from './Mes_header';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMessAC, getMessagesDataTC } from '../../../../../redux/chatsPageReducer';
class Mes_header_Container extends React.Component{
    
    render(){
        return <Mes_Header name={this.props.name}  imgUrl={this.props.imgUrl} date={this.props.date} user_id={this.props.user_id}/>
    };
}
const mapStateToProps = (state)=>{
    return{
        name: state.chats_page.mes_header_data.fullName,
        user_id: state.chats_page.mes_header_data.userId,
        imgUrl:  "https://baturevich.ru/images/cn/user2.jpg",
        date: "Last seen today at 3:40 PM",
    }
};

export default compose(connect(mapStateToProps,{addMessAC,getMessagesDataTC}),withRouter,)(Mes_header_Container)