import React from 'react';
import s from './Profile_Header.module.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Profile_Status extends React.Component{
    state = {
        isEdit: false,
        status: this.props.status_data,
    };
    activateIsEdit = ()=>{
        this.setState({
            isEdit: true,
        });
    };
    deActivateIsEdit = ()=>{
        this.setState({
            isEdit: false,
        });
        this.props.upStatusDataTC(this.state.status);
    };
    upStatus = (e)=>{
        this.setState({
            status: e.currentTarget.value
        });
    };
    componentDidUpdate(prevProps, prevState ){
        if(prevProps.status_data != this.props.status_data ){
            this.setState({
                status: this.props.status_data,
            })
        }
    }
    render(){
        let isAuthUserProfile = this.props.match.params.user_id  == this.props.auth_user_id;
        return(
            <div className={s.status}>
                {!this.state.isEdit 
                ?  <span onDoubleClick={() =>  isAuthUserProfile  && this.activateIsEdit()}>{this.props.status_data || 'No status'}</span> 
                :  isAuthUserProfile && <input onChange={this.upStatus} value={this.state.status} onBlur={() => this.deActivateIsEdit()} autoFocus={true} type="text" />}                  
            </div>
        );
    }
} 
const mapStateToProps = (state)=>{
    return{
        auth_user_id: state.auth_data.data.id
    }
}

export default compose(connect(mapStateToProps,{}), withRouter,)(Profile_Status);