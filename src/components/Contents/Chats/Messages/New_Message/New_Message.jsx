import React from 'react';
import s from './New_Message.module.css'
import { Field, reduxForm } from 'redux-form';

const New_Message = (props) => {
    const onAddMess = (values)=>{
        props.addMessAC(values.newMessText)
    }
    return (
        <New_MessageFormRedux onSubmit={onAddMess}/>
    );
}
const New_MessageForm = (props) => {
    return (
        <form className={s.wrapper} onSubmit={props.handleSubmit}>
            <i className="fa fa-smile-o"></i>
            <i className="fa fa-paperclip"></i>
            <Field name={"newMessText"} component={"textarea"} className={s.message} />
            <button className={s.send}><i className="fa fa-paper-plane-o"></i></button>
        </form>
    );
};
 const New_MessageFormRedux = reduxForm({ form: 'New_MessageForm' })(New_MessageForm);

export default New_Message;