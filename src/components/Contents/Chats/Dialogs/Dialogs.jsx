import React, { useEffect } from 'react';
import s from './Dialogs.module.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getDialogsDataTC } from '../../../../redux/chatsPageReducer';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {
    useEffect(()=>{
        props.getDialogsDataTC(1, 10)
    },[])
    let urlForDialog = props.device === "mobile" ?  "/chats/messages/" : "/chats/"
    return (
        <div className="col-md-4">
            <div className={s.dialogs}>
                <div className={s.header}>
                    <h2 className={s.title}>Messages</h2>
                    <div className={s.search_wrapper}>
                        <input type="text" className={s.search} placeholder="Search" />
                        <a href="#s" className={s.search_btn} ><i className="fa fa-search"></i></a>
                    </div>
                </div>
                <div className={s.dialog_wrapper}>
                    {props.dialogs_data.map(dialog =>(
                        <Dialog key={Math.random() * 10} dialog={dialog} url={urlForDialog} />
                    ))}       
                </div>
            </div>
        </div>
    );
};
const mapStoreToProps = (state) => (
    {dialogs_data: state.chats_page.dialogs_data,
    device:state.app.device})
 
export default compose(connect(mapStoreToProps,{getDialogsDataTC,}),withRouter,)(Dialogs);