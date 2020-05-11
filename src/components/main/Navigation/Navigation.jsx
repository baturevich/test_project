import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <section className="navigation">
      <ul className={s.menu}>
        <li className={s.menu__item}>
          <NavLink to={`/profile/${props.user_id}`} className={s.menu__link}><i className="fa fa-user"></i><span>My profile</span></NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/newsfeed" className={s.menu__link}><i className="fa fa-newspaper-o"></i><span>Newsfees</span></NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/chats" className={s.menu__link}><i className="fa fa-comments"></i><span>Messages</span></NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/users" className={s.menu__link}><i className="fa fa-users"></i><span>Users</span></NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/videos" className={s.menu__link}><i className="fa fa-video-camera"></i><span>Videos</span></NavLink>
        </li>
        <li className={s.menu__item}>
          <NavLink to="/music" className={s.menu__link}><i className="fa fa-music"></i><span>Music</span></NavLink>
        </li>
        {props.device != "mobile" &&
        <>
          <li className={s.menu__item}>
            <NavLink to="/bookmarks" className={s.menu__link}><i className="fa fa-star"></i><span>Bookmsrks</span></NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink to="/documents" className={s.menu__link}><i className="fa fa-file"></i><span>Documents</span></NavLink>
          </li>
          </>
        }
      </ul>
    </section>
  );
};

export default Navigation;