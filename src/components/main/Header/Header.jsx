import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className="header">
      <div className={s.header__wrapper}>
        <a href="#s" className={s.header__logo}>Vision.com</a>
        <div className={`${s.input_wrapper}`}>
          <input type="text" className={s.search_input} placeholder="Search" />
          <a href="#s" className={s.search_btn}><i className="fa fa-search"></i></a>
        </div>
        <div className={s.user_ungle}>
          <a href="" className={s.user_notification}><i className="fa fa-bell-o"></i></a>
          <a href="#s" className={s.profile_name}>{props.name}</a>
          <img src={props.imgUrl} alt="profile-picture" className={s.profile_img} />
        </div>
      </div>
    </header>
  );
};
export default Header;