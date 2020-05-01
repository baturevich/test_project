import React from 'react';
import Dialog from './Dialog';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDialogsDataTC } from '../../../../../redux/chatsPageReducer';
import Preloader from '../../../../common/Preloader/Preloader';

class Dialog_Container extends React.Component {
    componentDidMount() {
        this.props.getDialogsDataTC(1, 10)
    }
    render() {
        return  <Dialog dialogs_data={this.props.dialogs_data} />

    };
}
const mapStoreToProps = (state) => {
    return {
        dialogs_data: state.chats_page.dialogs_data,
        isLoading: state.chats_page.isLoading,
    }
}

export default compose(
    connect(mapStoreToProps, { getDialogsDataTC, }),
    withRouter,
)(Dialog_Container);

