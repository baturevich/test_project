import React from 'react';
import { connect } from 'react-redux';
import Profile_Post from './Profile_Post'
import {deletePostAC} from '../../../../../../redux/profilePageReducer'


 class Profile_Post_Container extends React.Component{
     render(){
         return(
            <Profile_Post deletePostAC={this.props.deletePostAC} profile_page={this.props.profile_page} />
         );
     }
 }
let mapStateToProps = (state) =>{
    return{
       profile_page: state.profile_page,
    }  
}



export default  connect(mapStateToProps,{deletePostAC})(Profile_Post_Container);