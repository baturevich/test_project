import React from 'react';
import { Route } from 'react-router-dom';
import Profile from '../../Contents/Profile/Profile';
import withSuspense from '../../common/HOComponents/withSuspense';
import { connect } from 'react-redux';
import StartScreen from './StartScreen';
const Chats = React.lazy(() => import('../../Contents/Chats/Chats'));
const Users = React.lazy(() => import('../../Contents/Users/Users'));


const Content = (props)=> {
    return (
      <div className="content_container">
        <div className="container-fluid">
          <Route path="/profile/:user_id" render={withSuspense(Profile)} />
          <Route path="/chats" render={withSuspense(Chats)}/>
          <Route path="/vision" render={()=>
            <StartScreen device={props.device} auth_user_id={props.auth_user_id}/>}/>
          <Route path='/users' render={withSuspense(Users)}/>
        </div>
      </div>
    );
}
const mapStateToProps = (state) =>({device:state.app.device, auth_user_id: state.auth_data.data.id})
export default connect(mapStateToProps,{})(Content);