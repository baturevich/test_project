import React from 'react';
import MessagesHeader from './MessagesHeader';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getMessagesDataTC } from '../../../../../redux/chatsPageReducer';

const MesagesHeaderContainer = (props) => {
    return <MessagesHeader name={props.name}
        imgUrl={props.imgUrl} date={props.date}
        user_id={props.user_id} />
}
const mapStateToProps = (state) => {
    return {
        name: state.chats_page.mes_header_data.fullName,
        user_id: state.chats_page.mes_header_data.userId,
        imgUrl: "https://baturevich.ru/images/cn/user2.jpg",
        date: "Last seen today at 3:40 PM",
    }
};

export default compose(
    connect(mapStateToProps, { getMessagesDataTC }), withRouter)(MesagesHeaderContainer)