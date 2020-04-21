import React from 'react';
import s from './Users.module.css'
import User_Item_Container from './User_Item/User_Item_Container'
const Users = () => {
    return (
        <div className={s.users}>
            <div className="row">
                <div className="col-md-12">
                    <User_Item_Container />
                </div>
            </div>
        </div>
    );
}
export default Users;