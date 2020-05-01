import React from 'react';
import s from './Chats.module.css';
import Dialogs from './Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Messages_Container from './Messages/Messages_Container';



const Chats = (props) => {
    return (
        <div className={s.chats}>
            <div className="row">
                <Dialogs state={props.state}/>
                <Route path="/chats/:user_id" render={() => <Messages_Container/>} />
                <Route exact path="/chats">
                    <h1 className={s.preview}>Start messaging...</h1>
                </Route>
            </div>
        </div>
    );

};

export default Chats;