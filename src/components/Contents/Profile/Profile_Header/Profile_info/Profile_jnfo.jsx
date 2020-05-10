import React, { useState, useEffect } from 'react';
import s from '../Profile_Header.module.css';
import { connect } from 'react-redux';
import { reqMoreUserDataTC } from '../../../../../redux/profilePageReducer';
const Profile_Info = (props) => {
    let [viewMoreInfo, setViewMoreInfo] = useState(false)
    useEffect(() => {
        reqMoreUserDataTC()
    }, [])
    const toggleMoreInfo = (answer) => {
        setViewMoreInfo(answer)
    }
    if (!viewMoreInfo) {
        return <div className={s.more_info}>
            <button className={s.show_more} onClick={() => toggleMoreInfo(true)}>
                Show more information
                <i className="fa fa-angle-down"></i>
            </button>
        </div>
    } return (
        <div className={s.more_info}>
            <ul>
                {props.more_user_data.map(d => (<li>{d.quest}:<span> {d.answer}</span></li>))}
            </ul>
            <button className={s.hide_more} onClick={() => toggleMoreInfo(false)}>
                Hide more information<i className="fa fa-angle-down"></i>
            </button>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        more_user_data: state.profile_page.more_user_data,
    }
}

export default connect(mapStateToProps, {})(Profile_Info);