import React from 'react';
import Header from './Header';
import {AppStateType} from '../../../redux/store'
import { connect } from 'react-redux';
import { deLoginTC } from '../../../redux/authReducer';

type PropsType = {
    name: string,
    imgUrl: string,
    user_id: number,
    deLoginTC: ()=> void
}

const Header_Container : React.FC<PropsType> = (props)=> (<Header {...props}/>)

const mapStateToProps = (state: AppStateType)=>{
    return{
        name: state.auth_data.data.login,
        imgUrl: state.auth_data.photos.small,
        user_id: state.auth_data.data.id,
    }    
}

export default connect(mapStateToProps,{deLoginTC })(Header_Container)
