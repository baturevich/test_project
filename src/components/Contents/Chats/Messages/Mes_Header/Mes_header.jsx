import React from 'react';
import s from './Mes_Header.module.css';
import { NavLink } from 'react-router-dom';

const Mes_Header = (props) => {
    let user_name = props.name;
    let imgUrl = props.imgUrl;
    let date = props.date;
    return (
        <div className={s.header}>
            <NavLink className={s.profile} to="/profile">
                <img src={imgUrl} alt="User_img" className={s.user_img} />
            </NavLink>
            <div className="nmd">
                <NavLink to="/profile" className={s.name}>{user_name}</NavLink>
                <p className={s.date}>{date}</p>
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