import React from 'react';
import Content from './components/main/Content/Content.jsx';
import RigthSide from './components/main/RightSide/RightSide.jsx';
import Header_Container from './components/main/Header/Header_Container.jsx';
import Left_Side_Container from './components/main/LeftSide/Left_Side_Container.jsx';
import { connect } from 'react-redux';
import Login from './components/main/Login/Login.jsx';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader.jsx';
import { compose } from 'redux';
import {initializeTC } from './redux/appReducer'
import AppPreloader from './components/common/AppPreloader/AppPreloader.jsx';




class SocNet extends React.Component {
  componentDidMount() {
    this.props.initializeTC()
  }
  render() {

    if (!this.props.initialized) {
      return <AppPreloader />
    } else {
      if (!this.props.state.auth_data.isAuth) {
        return (
          <>
            <Redirect to='/login' />
            <Route path='/login' render={() => <Login />} />
          </>
        )
      }
      return (
        <>
          <Redirect to={"/profile/" + this.props.auth_user_id} />
          <div className="CN_wrapper">
            <Header_Container />
            <Content state={this.props.state} />
            <Left_Side_Container />
            {/* <RigthSide /> */}
          </div>
        </>
      );
    }
  };
}
const mapStateToProps = (state) => {
  return {
    state: state,
    isLoading: state.auth_data.isLoading,
    auth_user_id: state.auth_data.data.id,
    initialized: state.app.initialized,
  }
};

export default compose(connect(mapStateToProps, { initializeTC, }),withRouter,)(SocNet);
