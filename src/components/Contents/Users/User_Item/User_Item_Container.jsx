import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import {getUsersTC, followTC, unFollowTC } from '../../../../redux/usersPageReducer';
import User_Item from './User_Item';
import Preloader from '../../../common/Preloader/Preloader';

class User_Item_Container extends React.Component {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    onChangePage = (p) => {
        let page_number = p;
        this.props.getUsersTC(page_number, this.props.pageSize)
    }
    followedUser = (user_id) => {
        this.props.followTC(user_id)
    };
    unFollowedUser = (user_id) => {
       this.props.unFollowTC(user_id)
    }
    render() {

        return <>
            {this.props.isLoading ? <Preloader /> : <User_Item {...this.props}
            followedUser={this.followedUser}
            unFollowedUser={this.unFollowedUser}
            onChangePage={this.onChangePage}
            />}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users_page.users,
        totalUsersCount: state.users_page.totalUsersCount,
        currentPage: state.users_page.currentPage,
        pageSize: state.users_page.pageSize,
        isLoading: state.users_page.isLoading,
        followInProgress: state.users_page.followInProgress,
    }
};

export default connect(mapStateToProps, {getUsersTC, followTC, unFollowTC,})(User_Item_Container);
