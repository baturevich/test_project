import React from 'react';
import Profile_Header from './Profile_Header';
import { connect } from 'react-redux';

class Profile_Header_Container extends React.Component {
    render() {
        return (
            <Profile_Header user_data={this.props.user_data} name={this.props.name} />
        );
    }
}


let mapStateToProps = (state) => {
    if (state.profile_page.user_data.fullName) {
        return {
            name: state.profile_page.user_data.fullName,
            user_data: state.profile_page.user_data,
        }
    } else{
        return{
            name: state.profile_page.user_data_default.name,
            user_data: state.profile_page.user_data_default,
        } 
    }
}
let mapDispatchToProps = () => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile_Header_Container)