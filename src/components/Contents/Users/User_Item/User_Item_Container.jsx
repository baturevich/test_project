import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { render } from '@testing-library/react';
import { followAC, unfollowAC, setUsersAC, setCurrentPagesAC, setTotalUserCountAC} from '../../../../redux/usersPageReducer';
import User_Item from './User_Item';

class User_Item_Container extends React.Component {
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.set_users(response.data.items);
                this.props.set_user_count(response.data.totalCount);
            });
    }

    onChangePage = (p) =>{
        let page_number = p;
        this.props.set_current_page(page_number);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page_number}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.set_users(response.data.items)
            });
    }
    render() {
        return <User_Item currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            onChangePage={this.onChangePage}
        />
    }
}

const mapStateToProps = (state) =>{
    return{
        users: state.users_page.users,
        totalUsersCount: state.users_page.totalUsersCount,
        currentPage: state.users_page.currentPage,
        pageSize: state.users_page.pageSize,
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
        },
        set_current_page: (current_page)=>{
            dispath(setCurrentPagesAC(current_page))
        },
        set_user_count: (user_count)=>{
            dispath(setTotalUserCountAC(user_count))
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(User_Item_Container);
