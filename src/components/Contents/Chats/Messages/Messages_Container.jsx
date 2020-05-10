import React from 'react';
import Messages from './Messages';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMessagesDataTC } from '../../../../redux/chatsPageReducer';
import Preloader from '../../../common/Preloader/Preloader';
import { useEffect } from 'react';

const Messages_Container = (props) => {
    useEffect(() => {
        props.getMessagesDataTC(props.match.params.user_id);
    }, [])
    useEffect(() => {
        props.getMessagesDataTC(props.match.params.user_id);
    }, [props.match.params.user_id])

    return props.isLoading
        ? <div className="col-md-8"><Preloader /></div>
        : <Messages />
};
const mapStateToProps = (state) => {
    return {
        isLoading: state.chats_page.isLoading,
    }
}
export default compose(
    connect(mapStateToProps, { getMessagesDataTC }),
    withRouter,
)(Messages_Container)