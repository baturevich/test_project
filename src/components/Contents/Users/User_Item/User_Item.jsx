import React from 'react';
import s from './User_Item.module.css';

    let users = [
        { id: 1, followed: true, imgUrl: 'https://baturevich.ru/images/cn/user1.jpg', name: 'Anton Melanin', city: 'Chelyabins' },
        { id: 2, followed: false, imgUrl: 'https://baturevich.ru/images/cn/user2.jpg', name: 'Aleksandr Somov', city: 'Moscow' },
        { id: 3, followed: false, imgUrl: 'https://baturevich.ru/images/cn/user3.jpg', name: 'Vanya Hohol', city: 'Sverdlovsk' },
        { id: 4, followed: true, imgUrl: 'https://baturevich.ru/images/cn/user4.jpg', name: 'Evgeny Mamin', city: 'Saint-peterburg' }
    ]


const User_Item = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.set_users(users)
    }
    return props.users.map(u => {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className={s.user}>
                        <img src={u.imgUrl} alt="user-img" />
                        <div className={s.name_and_city}>
                            <p className={s.name}>{u.name}</p>
                            <p className={s.city}>{u.city}</p>
                        </div>

                        {u.followed
                            ? <span onClick={() => props.unfollow(u.id)}>Unfollowed</span>
                            : <span onClick={() => props.follow(u.id)}>Followed</span>
                        }
                    </div>
                </div>
            </div>
        );
    })
}

export default User_Item;