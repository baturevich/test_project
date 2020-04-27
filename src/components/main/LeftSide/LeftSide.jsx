import React from 'react';
import s from'./LeftSide.module.css';
import { NavLink } from 'react-router-dom';

const LeftSide = (props) => {
  return (
    <section className="left_side">
      <ul className={s.menu}>
        <li className={s.menu__item}>
          <NavLink to={`/profile/${props.user_id}`} className={s.menu__link}><i className="fa fa-user"></i>My profile</NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/newsfeed" className={s.menu__link}><i className="fa fa-newspaper-o"></i>Newsfees</NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/chats" className={s.menu__link}><i className="fa fa-comments"></i>Messages</NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/users" className={s.menu__link}><i className="fa fa-users"></i>Users</NavLink>
        </li>       
        <li className={s.menu__item}>
          <NavLink to="/videos" className={s.menu__link}><i className="fa fa-video-camera"></i>Videos</NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/music" className={s.menu__link}><i className="fa fa-music"></i>Music</NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/bookmarks" className={s.menu__link}><i className="fa fa-star"></i>Bookmsrks</NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/documents" className={s.menu__link}><i className="fa fa-file"></i>Documents</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default LeftSide;