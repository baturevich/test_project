import React from 'react';
import Messages from './Messages';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMessagesDataTC } from '../../../../redux/chatsPageReducer';
import Preloader from '../../../common/Preloader/Preloader';
class Messages_Container extends React.Component {
    componentDidMount() {
        this.props.getMessagesDataTC(this.props.match.params.user_id);
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.user_id != this.props.match.params.user_id){
            this.props.getMessagesDataTC(this.props.match.params.user_id);
        } 
    }
    render() {
        return  this.props.isLoading
                ? <div className="col-md-8"><Preloader/></div>
                :  <Messages  />    
    }
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