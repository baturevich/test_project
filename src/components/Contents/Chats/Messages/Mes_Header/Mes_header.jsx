import React from 'react';
import s from './Mes_Header.module.css';
import { NavLink } from 'react-router-dom';

const Mes_Header = (props) => {
    debugger;
    return (
        <div className={s.header}>
            <NavLink className={s.profile} to={`/profile/${+ props.user_id}`}>
                <img src={props.imgUrl} alt="User_img" className={s.user_img} />
            </NavLink>
            <div className="nmd">
                <NavLink to={`/profile/${+ props.user_id}`} className={s.name}>{props.name}</NavLink>
                <p className={s.date}>{props.date}</p>
            </div>
            <div className={s.others}>
                <i className="fa fa-phone"></i>
                <i className="fa fa-trash-o"></i>
                <i className="fa fa-photo"></i>
                <i className="fa fa-cog"></i>
            </div>
        </div>
    );
};

export default Mes_Header;