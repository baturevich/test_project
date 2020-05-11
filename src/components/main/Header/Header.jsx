import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <div className={s.header__wrapper}>
        <NavLink to="/vision" className={s.header__logo}>Vision.com</NavLink>
        <div className={`${s.input_wrapper}`}>
          <input type="text" className={s.search_input} placeholder="Search" />
          <a href="#" className={s.search_btn}><i className="fa fa-search"></i></a>
        </div>
        <div className={s.user_ungle}>
          <a href="" className={s.user_notification}><i className="fa fa-bell-o"></i></a>
          <NavLink to={`/profile/${props.user_id}`} className={s.profile_name}>{props.name}</NavLink>
          <img src={props.imgUrl} alt="profile-picture" className={s.profile_img} />
          <button className={s.logout} onClick={props.deLoginTC} >Log Out</button>
        </div>
      </div>
    </header>
  );
};
export default Header;