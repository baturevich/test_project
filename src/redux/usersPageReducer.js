import { UserAPI, FollowAPI } from "../API/Api";
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const IS_LOADING = "IS_LOADING"
const TOGGLE_FOLLOW_PROGRESS = "TOGGLE_FOLLOW_PROGRESS"


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount:0,
    currentPage: 1,
    isLoading: false,
    followInProgress: [],
};

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return{
                ...state,
                users: state.users.map(u =>{
                    if(u.id === action.user_id){
                       return{...u, followed:true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW:{
            return{
                ...state,
                users: state.users.map(u =>{
                    if(u.id === action.user_id){
                       return{...u, followed:false}
                    }
                    return u
                })
            }
        }
        case SET_USERS:{
            return{...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return{...state, currentPage: action.current_page}
        }
        case SET_TOTAL_USERS_COUNT:{
            return{...state, totalUsersCount: action.user_count}
        }
        case IS_LOADING:{
            return{...state, isLoading: action.answer}
        }
        case TOGGLE_FOLLOW_PROGRESS:{
            return{
                ...state, 
                followInProgress : action.answer === true
                ? [...state.followInProgress, action.user_id]
                : [state.followInProgress.filter(id => id != action.user_id)]
            }
        }
         default :{
            return state
        }
    };
};

export const followAC = (user_id) => ({type: FOLLOW, user_id: user_id});
export const unfollowAC = (user_id) => ({type: UNFOLLOW, user_id: user_id});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setCurrentPageAC = (current_page) => ({type: SET_CURRENT_PAGE, current_page});
export const setTotalUsersCountAC = (user_count) => ({type: SET_TOTAL_USERS_COUNT , user_count});
export const isLoadingAC = (answer) => ({type: IS_LOADING, answer});
export const toggleInFollowProgressAC = (answer, user_id) =>({type: TOGGLE_FOLLOW_PROGRESS, answer, user_id});

export const getUsersTC = (page, pageSize) =>{
    return async (dispatch) =>{
        dispatch(isLoadingAC(true))
        dispatch(setCurrentPageAC(page))
        let data = await UserAPI.getUsers(page, pageSize)

        dispatch(isLoadingAC(false))
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(200));
    }
}

export const followTC = (user_id) =>{
    return async(dispatch) =>{
        dispatch(toggleInFollowProgressAC(true, user_id));
        let response = await FollowAPI.follow(user_id)

        if (response.data.resultCode == 0) {
            dispatch(followAC(user_id))
            dispatch(toggleInFollowProgressAC(false, user_id))
        }      
    }
}
export const unFollowTC = (user_id) =>{
    return async(dispatch) =>{
        dispatch(toggleInFollowProgressAC(true, user_id));
        let response = await FollowAPI.unfollow(user_id)

        if (response.data.resultCode == 0) {
            dispatch(unfollowAC(user_id))
            dispatch(toggleInFollowProgressAC(false, user_id))
        }
    }
}

export default userPageReducer;