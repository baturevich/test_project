import React from 'react';
import s from './NewMessage.module.css'
import { Field, reduxForm } from 'redux-form';

const NewMessage = (props) => {
    return (
        <form className={s.wrapper} onSubmit={props.handleSubmit}>
            <div className={s.smile_icons}>
                <i className="fa fa-smile-o"></i>
                <i className="fa fa-paperclip"></i>
            </div>
            <Field name={"newMessText"} component={"textarea"} className={s.message} />
            <button className={s.send}><i className="material-icons">send</i></button>
        </form>
    );
};


export default reduxForm({ form: 'NewMessageForm' })(NewMessage);