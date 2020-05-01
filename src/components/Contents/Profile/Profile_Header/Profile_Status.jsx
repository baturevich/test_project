import React from 'react';
import s from './Profile_Header.module.css';

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
        console.log('UPDATE')
    }
    render(){
        return(
            <div className={s.status}>
                {!this.state.isEdit 
                ? <span onDoubleClick={() => this.activateIsEdit()}>{this.props.status_data || 'No status'}</span> 
                : <input onChange={this.upStatus} value={this.state.status} onBlur={() => this.deActivateIsEdit()} autoFocus={true} type="text" />}                  
            </div>
        );
    }
}
export default Profile_Status;