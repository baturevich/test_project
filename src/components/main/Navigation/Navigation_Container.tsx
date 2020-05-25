import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { AppStateType } from '../../../redux/store';
import { DeviceType } from '../../../redux/appReducer';

type PropsType={user_id: number,device: DeviceType}

const Navigation_Container: React.FC<PropsType>= (props) =>(
    <Navigation user_id={props.user_id} device={props.device} />
);

const mapStateToProps = (state: AppStateType) => ({
    user_id: state.auth_data.data.id,
    device: state.app.device,
})

export default connect(mapStateToProps,{})(Navigation_Container);