import React from 'react';
import s from '../Profile_Header.module.css';
import { reduxForm, Field } from 'redux-form';

const Edit_Profile_Info = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.edit_mode}>
            <div className={s.user_features}>
                <div className={s.user_data_names}>
                    <p>About me:</p>
                    <p>look for work:</p>
                    <div className={s.contacts_block}>
                        {Object.keys(props.user_data.contacts).map(key => <p key={Math.random()*10}>{key}:</p>)}
                    </div>
                </div>
                <div className={s.edit_mode_inputs}>
                    <Field name={'aboutMe'} type="text" component="input" />
                    <label className={s.switch}>
                        <Field name={'lookingForAJob'} type="checkbox" component="input" />
                        <span className={s.slider}></span>
                    </label>
                    {Object.keys(props.user_data.contacts).map(key => (
                    <Field key={Math.random()*10} name={'contacts.'+ key} type="text" component="input"  />
                    ))}   
                </div>
                {props.error &&
                    <div className={s.error}>
                    <span>{props.error}</span>
                </div>
                }  
            </div>
            <button className={s.save_edit_info}>
                <i className="material-icons">done</i>Save
            </button> 
        </form>
    );
}

export default reduxForm({form: "edit_profile_info"})(Edit_Profile_Info);