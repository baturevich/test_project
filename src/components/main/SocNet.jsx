import React from 'react';
import { connect } from 'react-redux';
import { getAuthDataTC, reqAuthPhoto } from '../../redux/authReducer';
import Content from './Content/Content';
import HeaderContainer from './Header/HeaderContainer';
import NavigationContainer from './Navigation/NavigationContainer';


class SocNet extends React.Component {
    componentDidMount() {
        this.props.getAuthDataTC()
    }
    render() {
        return (
            <div className="CN_wrapper">
                <HeaderContainer />
                <Content />
                <NavigationContainer />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ auth_user_id: state.auth_data.data.id, })
export default connect(mapStateToProps, { getAuthDataTC, reqAuthPhoto })(SocNet)