import React from 'react';
import Profile_Header from './Profile_Header';
import { connect } from 'react-redux';
import {
    getProfileDataTC, getStatusDataTC,
    upStatusDataTC, getProfileUserData, getProfileIsLoading
} from '../../../../redux/profilePageReducer';
import Preloader from '../../../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Profile_Header_Container extends React.Component {

    render() {
        return (
            <>
                {this.props.isLoading == true
                    ? <Preloader />
                    : <Profile_Header user_data={this.props.user_data}
                        user_data_default={this.props.user_data_default}
                        status_data={this.props.status_data}
                        upStatusDataTC={this.props.upStatusDataTC}

                    />
                }
            </>

        )
    }
}


let mapStateToProps = (state) => {
    if (state.profile_page.user_data.fullName) {
        return {
            user_data: getProfileUserData(state),
            isLoading: getProfileIsLoading(state),
            status_data: state.profile_page.status_data,
        }
    } else {
        return {
            user_data: state.profile_page.user_data_default,
            isLoading: getProfileIsLoading(state),
            status_data: state.profile_page.status_data,
        }
    }
};

export default compose(
    connect(mapStateToProps, { getProfileDataTC, getStatusDataTC, upStatusDataTC, }),
    withRouter,
)(Profile_Header_Container) 
