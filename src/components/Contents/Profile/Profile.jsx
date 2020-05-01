import React from 'react';
import s from './Profile.module.css';
import Profile_Content from './Profile_Content/Profile_Content';
import Profile_Header_Container from './Profile_Header/Profile_Header_Container';
import { getStatusDataTC ,getProfileDataTC  } from '../../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Profile extends React.Component{
    componentDidMount() {
        let user_id = this.props.match.params.user_id;
        this.props.getStatusDataTC(user_id);
        this.props.getProfileDataTC(user_id);
    }
    render(){
        return (
            <div className={s.profile}>
               <Profile_Header_Container/>
                <Profile_Content/>
            </div>
        );
    }
};
const mapStateToProps = (state)=>{
    return{

    }
}

export default compose(
    connect(mapStateToProps,{getStatusDataTC,getProfileDataTC}),
    withRouter,
)(Profile);