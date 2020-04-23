import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { render } from '@testing-library/react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, isLoadingAC} from '../../../../redux/usersPageReducer';
import User_Item from './User_Item';
import Preloader from '../../../common/Preloader/Preloader';
import { setUserDataAC } from '../../../../redux/profilePageReducer';

class User_Item_Container extends React.Component {
    componentDidMount() {
        this.props.isLoadingAC(true)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isLoadingAC(false)
                this.props.setUsersAC(response.data.items);
                this.props.setTotalUsersCountAC(200);
            });
    }

    onChangePage = (p) =>{
        this.props.isLoadingAC(true)
        let page_number = p;
        this.props.setCurrentPageAC(page_number);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page_number}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isLoadingAC(false)
                this.props.setUsersAC(response.data.items)
            });
    }
    onClickUser = (id) =>{
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                this.props.setUserDataAC(response.data)
            });
            debugger;
    }
    render() {
        
        return<> 
        {this.props.isLoading ? <Preloader/> : <User_Item currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            onChangePage={this.onChangePage}
            onClickUser={this.onClickUser}
            follow={this.props.followAC}
            unfollow={this.props.unfollowAC}
        /> }
        </>
    }
}

const mapStateToProps = (state) =>{
    return{
        users: state.users_page.users,
        totalUsersCount: state.users_page.totalUsersCount,
        currentPage: state.users_page.currentPage,
        pageSize: state.users_page.pageSize,
        isLoading: state.users_page.isLoading,
    }
};


export default  connect(mapStateToProps,{
    followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, isLoadingAC,setUserDataAC  })(User_Item_Container);
