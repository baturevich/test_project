import React from 'react';
import s from './FormLoginConrol.module.css'

const InputLoginControl = ({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return(
        <div className={s.formControl + " " + (hasError ? s.error : " ")}>
             { hasError && <span>{meta.error}</span>}
            <input {...input} {...props} />
        </div>
    );
}
export default InputLoginControl;