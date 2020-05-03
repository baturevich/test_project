import React from 'react';
import Content from './components/main/Content/Content.jsx';
import RigthSide from './components/main/RightSide/RightSide.jsx';
import Header_Container from './components/main/Header/Header_Container.jsx';
import Left_Side_Container from './components/main/LeftSide/Left_Side_Container.jsx';
import { connect } from 'react-redux';
import { isAuth, getAuthDataTC } from './redux/authReducer.js';
import Login from './components/main/Login/Login.jsx';
import { Route, Redirect } from 'react-router-dom';



class SocNet extends React.Component {
  componentDidMount() {
    this.props.getAuthDataTC()
  }
  render() {
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
      <Redirect to={"/profile/"+this.props.auth_user_id} />
      <div className="CN_wrapper">
        <Header_Container />
        <Content state={this.props.state} />
        <Left_Side_Container />
        {/* <RigthSide /> */}
      </div>
      </>
    );

  };
}
const mapStateToProps = (state) => {
  return {
    state: state,
    isLoading: state.auth_data.isLoading,
    auth_user_id: state.auth_data.data.id
  }
};

export default connect(mapStateToProps, { getAuthDataTC })(SocNet);
