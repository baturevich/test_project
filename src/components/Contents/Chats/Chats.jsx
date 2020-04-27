import React from 'react';
import s from './Chats.module.css';
import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';
import { Route } from 'react-router-dom';



const Chats = (props) => {
    // Get state for chats page
    // let state = props.store.getState().chats_page;

    return (
        <div className={s.chats}>
            <div className="row">
                <Dialogs state={props.state}/>
                <Route path="/chats/sasha-kosulin" render={() => <Messages state={props.state} />} />
                <Route exact path="/chats">
                    <h1 className={s.preview}>Start messaging...</h1>
                </Route>
            </div>
        </div>
    );

};

export default Chats;