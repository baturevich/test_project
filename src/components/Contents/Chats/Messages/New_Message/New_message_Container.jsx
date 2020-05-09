import React from 'react';
import { addMessAC } from '../../../../../redux/chatsPageReducer';
import { connect } from 'react-redux';
import New_MessageFormRedux from './New_Message';
import { reset } from 'redux-form';

class New_Message_Container extends React.Component {
    onAddMess = (values) => {
        this.props.addMessAC(values.newMessText);
        this.props.reset('New_MessageForm');
    }
    render() {
        return <New_MessageFormRedux onSubmit={this.onAddMess} />
    };
};



export default connect(null, { addMessAC, reset })(New_Message_Container);