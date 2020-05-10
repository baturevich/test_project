import React from 'react';
import { connect } from 'react-redux';
import Login from './components/main/Login/Login.jsx';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeTC } from './redux/appReducer'
import AppPreloader from './components/common/AppPreloader/AppPreloader.jsx';
import SocNet from './components/main/SocNet.jsx';

class App extends React.Component {
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
            <Redirect to="/login"/>
            <Route path='/login' render={() => <Login />} />
          </>
        )
      } return (<SocNet />);
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

export default compose(connect(mapStateToProps, { initializeTC, }), withRouter)(App);
