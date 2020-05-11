import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Navigation_Container extends React.Component{
    render(){
        return(
            <Navigation user_id={this.props.user_id}/>
        );
    }
}
const mapStateToProps = (state)=> ({
    user_id: state.auth_data.data.id,
})


 
export default compose(connect(mapStateToProps,{}),withRouter,)(Navigation_Container)