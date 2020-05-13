import React from 'react';
import s from './Chats.module.css';
import Dialogs from './Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Messages_Container from './Messages/Messages_Container';
import { connect } from 'react-redux';



const Chats = (props) => {
    const getPathForMessages = () => {     
        if (props.device === "mobile") {
            return "/chats/messages/:user_id"
        } return "/chats/:user_id"
    }
    return (
        <div className={s.chats}>
            <div className="row">
                {props.device == "mobile"
                    ? <Route exact path="/chats" render={() => <Dialogs />} />
                    : <Dialogs />
                }
                <Route path={getPathForMessages()}
                    render={() => <Messages_Container />} />
                <Route exact path={props.device == "mobile" ? "/messages" : "/chats"}>
                    <h1 className={s.preview}>Start messaging...</h1>
                </Route>
            </div>
        </div>
    );

};
const mapStateToProps = (state) => ({ device: state.app.device })
export default connect(mapStateToProps, {})(Chats);