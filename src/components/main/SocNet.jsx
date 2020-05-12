import React from 'react';
import { connect } from 'react-redux';
import { getAuthDataTC, reqAuthPhoto } from '../../redux/authReducer';
import Content from './Content/Content';
import Header_Container from './Header/Header_Container';
import Navigation_Container from './Navigation/Navigation_Container';

class SocNet extends React.Component{
    componentDidMount(){
        let promise = this.props.getAuthDataTC()
        Promise.all([promise])
            .then(this.props.reqAuthPhoto(this.props.auth_user_id))
    }
    render(){
        return <div className="CN_wrapper">
        <Header_Container />
        <Content/>
        <Navigation_Container />
      </div>
    }
}
const mapStateToProps = (state)=>({auth_user_id: state.auth_data.data.id,})
export default connect(mapStateToProps,{getAuthDataTC, reqAuthPhoto})(SocNet)