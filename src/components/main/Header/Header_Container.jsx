import React from 'react';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import { getAuthDataTC } from '../../../redux/authReducer.js';
class Header_Container extends React.Component{
    componentDidMount(){
        this.props.getAuthDataTC()
    }
    render(){
        return <Header {...this.props} />
    }
};
const mapDispatchToProps = (state)=>{
   if(state.auth_data.data.login){
    return{
        name: state.auth_data.data.login,
        imgUrl: 'https://baturevich.ru/images/cn/user2.jpg'
    }
       
   } else{
    return{
        name: 'No Name',
        imgUrl: 'https://baturevich.ru/images/cn/user2.jpg'
    } 
   }
}
export default connect(mapDispatchToProps,{getAuthDataTC})(Header_Container)
