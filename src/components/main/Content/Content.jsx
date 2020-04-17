import React from 'react';
import { Route } from 'react-router-dom';
import Profile from '../../Contents/Profile/Profile';
import s from './Content.module.css'
import Chats from '../../Contents/Chats/Chats';



const Content = (props) => {
  return (
    <div className={s.content_container}>
      <Route path="/profile" render={() => <Profile store={props.store} />} />
      <Route path="/chats" render={() => <Chats store={props.store} />} />
    </div>
  );
}

export default Content;