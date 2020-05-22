import React from 'react';
import { connect } from 'react-redux';
import Login from './components/main/Login/Login.jsx';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeTC } from './redux/appReducer'
import AppPreloader from './components/common/AppPreloader/AppPreloader.jsx';
import SocNet from './components/main/SocNet.jsx';
import GlobalError from './components/common/GlobalError/GlobalError.jsx';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeTC()
  }

  render() {
    if (!this.props.initialized) {
      return <AppPreloader />
    } else {
      if (!this.props.isAuth) {
        return (
          <>
            <Redirect to="/login"/>
            <Route path='/login' render={() => <Login />} />
          </>
        )
      } return(
        <>
          <GlobalError global_errors={this.props.global_errors}/>
          <SocNet />
        </>
      )
    }
  };
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.auth_data.isLoading,
    isAuth: state.auth_data.isAuth,
    auth_user_id: state.auth_data.data.id,
    initialized: state.app.initialized,
    global_errors: state.app.global_errors,
  }
};



export default compose(connect(mapStateToProps, { initializeTC, }), withRouter)(App);
