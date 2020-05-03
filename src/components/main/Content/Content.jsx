import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Profile from '../../Contents/Profile/Profile';
import Chats from '../../Contents/Chats/Chats';
import Users from '../../Contents/Users/Users';



const Content = (props) => {

  return (
    <div className="content_container">
      <div className="container-fluid">
        <Route path="/profile/:user_id" render={() => <Profile />} />
        <Route path="/chats" render={() => <Chats state={props.state} />} />
        <Route path='/users' render={() => <Users />} />
      </div>
    </div>
  );
}

export default Content;