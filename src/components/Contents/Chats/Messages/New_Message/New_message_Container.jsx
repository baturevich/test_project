import React from 'react';
import { addMessAC } from '../../../../../redux/chatsPageReducer';
import New_Message from './New_Message';
import { connect } from 'react-redux';


const mapStateToProps = (state)=>({})


const New_Message_Container = connect(mapStateToProps,{addMessAC})(New_Message);

export default New_Message_Container;