import React from 'react';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import { deLoginTC } from '../../../redux/authReducer';
class Header_Container extends React.Component{
    render(){
        return <Header {...this.props}/>
    }
};

const mapDispatchToProps = (state)=>{
    return{
        name: state.auth_data.data.login,
        imgUrl: state.auth_data.photos.small,
        user_id: state.auth_data.data.id,
    }    
}

export default connect(mapDispatchToProps,{deLoginTC })(Header_Container)
