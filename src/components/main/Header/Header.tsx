import React  from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  name: string,
  imgUrl: string,
  user_id: number,
  deLoginTC: ()=> void
}

const Header: React.FC<PropsType>=  (props) => {
  return (
    <header className="header">
      <div className={s.header__wrapper}>
        <NavLink to="/vision" className={s.header__logo}>Vision.com</NavLink>
        <div className={`${s.input_wrapper}`}>
          <input type="text" className={s.search_input} placeholder="Search" />
          <NavLink to="/vision" className={s.search_btn}><i className="fa fa-search"></i></NavLink>
        </div>
        <div className={s.user_ungle}>
          <a href="##" className={s.user_notification}><i className="fa fa-bell-o"></i></a>
          <NavLink to={`/profile/${props.user_id}`} className={s.profile_name}>{props.name}</NavLink>
          <img src={props.imgUrl} 
            className={props.imgUrl ? s.profile_img : s.profile_img_none} />
          <button className={s.logout} onClick={props.deLoginTC} >Log Out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;