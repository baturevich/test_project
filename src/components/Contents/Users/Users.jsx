import React from 'react';
import s from './Users.module.css'
import { getUsersTC, followTC, unFollowTC } from '../../../redux/usersPageReducer';
import { connect } from 'react-redux';
import UserItem from './UserItem/UserItem';
import { useEffect } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import Pagination from '../../common/Pagination/Pagination';

const Users = (props) => {
    useEffect(()=>{
        props.getUsersTC(props.currentPage, props.pageSize)
    },[])
    const followedUser = (user_id) => {
        props.followTC(user_id)
    };
    const unFollowedUser = (user_id) => {
        props.unFollowTC(user_id)
    }
    const onChangePage = (page_number, page_size)=>{
        props.getUsersTC(page_number, page_size)
    }
    return (
        <div className={s.users}>
            <div className="row">
                <div className="col-md-12">
                    <Pagination totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onChangePage={onChangePage}
                    portionSize={props.device === "mobile" ? 5 : 20}
                    />
                    {props.isLoading 
                    ? <Preloader/>
                    :props.users.map(user => (
                        <UserItem key={Math.random()*3}user={user}
                            unFollowedUser={unFollowedUser}
                            followedUser={followedUser}
                            followInProgress={props.followInProgress}
                            device={props.device}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        users: state.users_page.users,
        totalUsersCount: state.users_page.totalUsersCount,
        currentPage: state.users_page.currentPage,
        pageSize: state.users_page.pageSize,
        isLoading: state.users_page.isLoading,
        followInProgress: state.users_page.followInProgress,
        device:state.app.device
    }
};
export default connect(mapStateToProps, { getUsersTC, followTC, unFollowTC, })(Users);