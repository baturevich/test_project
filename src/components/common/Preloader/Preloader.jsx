import React from 'react';
import loadImg from '../../../assets/Loading.gif';
import s from './Preloader.module.css'
let Preloader = (props)=>{
    return(
        <div className={s.preloader}><img src={loadImg} alt="preloader"/></div>
    )
};
export default Preloader;