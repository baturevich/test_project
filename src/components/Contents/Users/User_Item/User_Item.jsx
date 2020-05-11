import React from 'react';
import s from './User_Item.module.css';
import { NavLink } from 'react-router-dom';

const User_Item = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className={s.user_wrapper} >
                    <div className={s.user}>
                    <NavLink to={`/profile/${props.user.id}`} >
                        <img src={props.user.photos.small
                            ? props.user.photos.small
                            : 'https://baturevich.ru/images/cn/user2.jpg'} alt="user-img" />
                    </NavLink>
                    <div className={s.name_and_city}>
                        <NavLink to={`/profile/${props.user.id}`} >
                            <p className={s.name} >
                                {props.user.name}
                            </p>
                        </NavLink>
                        <p className={s.city}>{props.user.city ? props.user.city : 'Chelyabinsk'}</p>
                    </div>

                    {props.user.followed
                        ? <button disabled={props.followInProgress.some(id => id === props.user.id)}
                            onClick={() => props.unFollowedUser(props.user.id)}>Unfollow</button>
                        : <button disabled={props.followInProgress.some(id => id === props.user.id)}
                            onClick={() => props.followedUser(props.user.id)}>Follow</button>
                    }
                </div>
                {props.device === "mobile" ?
                    props.user.followed
                        ? <button  className={s.mob_btn} 
                            disabled={props.followInProgress.some(id => id === props.user.id)}
                            onClick={() => props.unFollowedUser(props.user.id)}>Unfollow</button>
                        : <button className={s.mob_btn} 
                            disabled={props.followInProgress.some(id => id === props.user.id)}
                            onClick={() => props.followedUser(props.user.id)}>Follow</button> 
                  : null           
                }
                </div>
            </div>
        </div>
    )
}
export default User_Item;