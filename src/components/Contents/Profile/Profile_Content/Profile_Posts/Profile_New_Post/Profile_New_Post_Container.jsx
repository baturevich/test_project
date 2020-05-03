import React from 'react';
import { addPostAC } from '../../../../../../redux/profilePageReducer';
import Profile_New_Post from './Profile_New_Post';
import { connect } from 'react-redux';
import { reset } from 'redux-form';


class Profile_New_Post_Container extends React.Component{
    onAddPost = (values)=>{
        this.props.addPostAC(values.newPostText);
        this.props.reset('newProfilePostForm');
    };
    render(){
        return <Profile_New_Post onAddPost={this.onAddPost} imgUrl={this.props.imgUrl}/>
    };
};
let mapStateToProps = (state) => {
    return {
        imgUrl: state.profile_page.user_data.imgUrl 
        ?  state.profile_page.user_data.imgUrl 
        : state.auth_data.user_data_default.imgUrl,

    }
};


export default connect(mapStateToProps,{addPostAC,reset})(Profile_New_Post_Container);