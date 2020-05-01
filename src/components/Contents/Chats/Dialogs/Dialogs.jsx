import React from 'react';
import s from './Dialogs.module.css';
import Dialog_Container from './Dialog/Dialog_Container';


const Dialogs = (props) => {
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
                    <Dialog_Container/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;