import React from 'react';
import { addMess } from '../../../../../redux/chatsPageReducer';
import { connect } from 'react-redux';
import New_MessageFormRedux from './New_Message';
import { reset } from 'redux-form';

class New_Message_Container extends React.Component {
    onAddMess = (values) => {
        this.props.addMess(values.newMessText);
        this.props.reset('New_MessageForm');
    }
    render() {
        return <New_MessageFormRedux onSubmit={this.onAddMess} />
    };
};



export default connect(null, { addMess, reset })(New_Message_Container);