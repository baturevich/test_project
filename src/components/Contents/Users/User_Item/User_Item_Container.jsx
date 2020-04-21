import React from 'react';
import { connect } from 'react-redux';
import User_Item from './User_Item';
import { followAC, unfollowAC, setUsersAC } from '../../../../redux/usersPageReducer';

const mapStateToProps = (state) =>{
    return{
        users: state.users_page.users
    }
};

const mapDispatchToProps =(dispath)=>{
    return{
        follow: (user_id)=>{
            dispath(followAC(user_id))
        },
        unfollow: (user_id)=>{
            dispath(unfollowAC(user_id))
        },
        set_users: (users)=>{
            dispath(setUsersAC(users))
        }
    }
}

const User_ItemContainer = connect(mapStateToProps,mapDispatchToProps)(User_Item);
export default User_ItemContainer;