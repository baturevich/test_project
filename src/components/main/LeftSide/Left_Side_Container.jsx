import React from 'react';
import { connect } from 'react-redux';
import LeftSide from './LeftSide';
import { withRouter } from 'react-router-dom';

class Left_Side_Container extends React.Component{
    render(){
        return(
            <LeftSide user_id={this.props.user_id}/>
        );
    }
}
const mapStateToProps = (state)=> ({
    user_id: state.auth_data.data.id,
})

let With_Left_Side_Container = withRouter(Left_Side_Container)
 
export default connect(mapStateToProps,{})(With_Left_Side_Container)