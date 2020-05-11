import React from 'react';
import { connect } from 'react-redux';
import { getAuthDataTC } from '../../redux/authReducer';
import Content from './Content/Content';
import Header_Container from './Header/Header_Container';
import Navigation_Container from './Navigation/Navigation_Container';

class SocNet extends React.Component{
    componentDidMount(){
        this.props.getAuthDataTC()
    }
    render(){
        return <div className="CN_wrapper">
        <Header_Container />
        <Content/>
        <Navigation_Container />
      </div>
    }
}

export default connect(null,{getAuthDataTC})(SocNet)