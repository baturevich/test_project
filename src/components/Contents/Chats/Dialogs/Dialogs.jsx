import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import StoreContext from '../../../../StoreContext';



const Dialogs = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().chats_page
                let dialogsElement =
                    state.dialogs_data.map(d => <Dialog name={d.name} path={d.path} imgAdress={d.imgAdress} />);
                //
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
                                {dialogsElement}
                            </div>
                        </div>
                    </div>
                );
            }}
        </StoreContext.Consumer>
    );


};

export default Dialogs;