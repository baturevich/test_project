import { PhotosType} from './authReducer';
import { UserAPI, FollowAPI } from "../API/Api";

//Actions
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const IS_LOADING = "IS_LOADING"
const TOGGLE_FOLLOW_PROGRESS = "TOGGLE_FOLLOW_PROGRESS"

type UsersType ={
    name: string, id: number, uniqueUrlName: string | null, 
    photos: PhotosType, status:string, followed: boolean 
}
let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount:0,
    currentPage: 1,
    isLoading: false,
    followInProgress: [] as Array<UsersType>,
};
export type InitialStateType = typeof initialState;

const userPageReducer = (state = initialState, action: any): InitialStateType => {
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

// Action Creators

type FollowType = {type: typeof FOLLOW, user_id: number}
export const follow = (user_id:number): FollowType => ({type: FOLLOW, user_id: user_id});

type UnfollowType = {type :typeof UNFOLLOW, user_id: number}
export const unfollow = (user_id:number): UnfollowType => ({type: UNFOLLOW, user_id: user_id});

type SetUserType = {type:typeof SET_USERS, users: UsersType }
export const setUsers = (users:UsersType): SetUserType => ({type: SET_USERS, users: users});

type SetCurrentPageType = {type: typeof SET_CURRENT_PAGE, current_page: number }
export const setCurrentPage = (current_page:number): SetCurrentPageType => (
    {type: SET_CURRENT_PAGE, current_page});

type SetTotalUsersCountType = {type: typeof SET_TOTAL_USERS_COUNT, user_count: number}
export const setTotalUsersCount = (user_count:number): SetTotalUsersCountType => (
    {type: SET_TOTAL_USERS_COUNT , user_count});


type IsLoadingType  ={type: typeof IS_LOADING, answer: boolean}
export const isLoading = (answer: boolean): IsLoadingType => ({type: IS_LOADING, answer});

type ToggleInFollowProgressType = {type: typeof TOGGLE_FOLLOW_PROGRESS, answer: boolean, user_id: number }
export const toggleInFollowProgress = (answer:boolean, user_id: number): ToggleInFollowProgressType =>(
    {type: TOGGLE_FOLLOW_PROGRESS, answer, user_id});


//Thunks Creators
export const getUsersTC = (page:number, pageSize:number,) =>{
    return async (dispatch: any) =>{
        dispatch(isLoading(true))
        dispatch(setCurrentPage(page))
        let data = await UserAPI.getUsers(page, pageSize)
        dispatch(isLoading(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const followTC = (user_id:number) =>{
    return async(dispatch: any) =>{
        dispatch(toggleInFollowProgress(true, user_id));
        let response = await FollowAPI.follow(user_id)

        if (response.data.resultCode == 0) {
            dispatch(follow(user_id))
            dispatch(toggleInFollowProgress(false, user_id))
        }      
    }
}
export const unFollowTC = (user_id:number) =>{
    return async(dispatch: any) =>{
        dispatch(toggleInFollowProgress(true, user_id));
        let response = await FollowAPI.unfollow(user_id)

        if (response.data.resultCode == 0) {
            dispatch(unfollow(user_id))
            dispatch(toggleInFollowProgress(false, user_id))
        }
    }
}

export default userPageReducer;