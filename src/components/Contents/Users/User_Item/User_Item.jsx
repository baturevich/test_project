import React from 'react';
import s from './User_Item.module.css';

const User_Item  =(props) =>{
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 0; i <= pagesCount; i++) {
       if(i > 0){
        pages.push(i)
       } 
    }    

    return (<div>
        <ul className={s.pagination}>
            {   
                pages.map(p => {
                    return <li className={props.currentPage === p && s.selected} onClick={()=>{props.onChangePage(p)}}>{p}</li>
                })
            }
        </ul>
        {
            props.users.map(u => {
               return <div className="row">
                    <div className="col-md-12">
                        <div className={s.user}>
                            <img src={u.photos.small
                                ? u.photos.small
                                : 'https://baturevich.ru/images/cn/user2.jpg'} alt="user-img" />
                            <div className={s.name_and_city}>
                                <p className={s.name}>{u.name}</p>
                                <p className={s.city}>{u.city ? u.city : 'Chelyabinsk'}</p>
                            </div>

                            {u.followed
                                ? <span onClick={() => props.unfollow(u.id)}>Unfollowed</span>
                                : <span onClick={() => props.follow(u.id)}>Followed</span>
                            }
                        </div>
                    </div>
                </div>
            })
        }
    </div>
    )
}
export default User_Item;