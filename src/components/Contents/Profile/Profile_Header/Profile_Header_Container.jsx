import React from 'react';
import Profile_Header from './Profile_Header';
import { connect } from 'react-redux';
import { getProfileDataTC, getStatusDataTC, upStatusDataTC } from '../../../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../../../common/Preloader/Preloader';
import { compose } from 'redux';

class Profile_Header_Container extends React.Component {
    componentDidMount() {
        let user_id = this.props.match.params.user_id;
        this.props.getProfileDataTC(user_id);
        this.props.getStatusDataTC(user_id);
    }
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
            user_data: state.profile_page.user_data,
            isLoading: state.profile_page.isLoading,
            status_data: state.profile_page.status_data,
        }
    } else {
        return {
            user_data: state.auth_data.user_data_default,
            isLoading: state.profile_page.isLoading,
        }
    }
};

export default compose(
    connect(mapStateToProps, { getProfileDataTC, getStatusDataTC, upStatusDataTC,
    }), 
    withRouter,
    )(Profile_Header_Container);
