import { ProfileAPI } from "../API/Api";
import { GetCurrentDate } from "../utils/GetCurrentDate/GetCurrentDate";

const ADD_POST = "profile/ADD_POST";
const IS_LOADING = "profile/IS_LOADING";
const DELETE_POST = "profile/DELETE_POST";
const SET_USER_DATA = "profile/SET_USER_DATA";
const SET_STATUS_DATA = "profile/SET_STATUS_DATA";
const SET_PROFILE_PHOTO = "profile/SET_PROFILE_PHOTO"
const SET_MORE_USER_DATA = "profile/SET_MORE_USER_DATA";



let initialState =   {
    isSetProfileData: false,
    user_data: {}, status_data: "", posts_data:[], 
    user_data_default: {
        id: 1,
        photos:{ 
        small:"https://baturevich.ru/images/cn/user2.jpg",
        large:"https://baturevich.ru/images/cn/user2.jpg",
        },
        name: "No name",
        posts_count: 1,
        friends_count: 2,
        followers_count: 999,
        music_count: 15,
        videos_count: 9,
    },
    more_user_data:[
        {quest:"About me", answer: "Programmer on React.js"},
        {quest:"Autitude to smoking", answer:"Negative"},
        {quest:"Autitude to alcohol", answer:"Negative"},
    ],isLoading: false,
};
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:{
            return{...state, isLoading: action.answer}
        }
        case ADD_POST:{
            let post_text = action.post_text;
            let newPost = { 
                id: state.posts_data.length,
                name: state.user_data.name || state.user_data_default.name ,
                date: GetCurrentDate("full_date"),
                text: post_text,
                imgUrl: state.user_data.photos.small || state.user_data_default.photos.small,
                likeCounts: 0,
                commentCounts: 0
            };        
            if(post_text !== ''){
                return{
                    ...state,
                    posts_data: [...state.posts_data, newPost],
                }   
            }       
        }
        case DELETE_POST:{
            return {
                ...state,
                posts_data: state.posts_data.filter(p => p.id != action.post_id)
            }
        }
        case SET_USER_DATA:{
            return {
                ...state,
                user_data: action.user_data,
                isSetProfileData: true,
            }
        }
        case SET_STATUS_DATA:{
            return {
                ...state,
                status_data: action.status_data
            }
        }
        case SET_PROFILE_PHOTO:{
            return {
                ...state,
                user_data: {...state.user_data, photos: action.photos},

            }
        }
        case SET_MORE_USER_DATA:{
            return {
                ...state,
                more_user_data: action.data
            }
        }
        default:
            return state;
    };
};

// Action Creators
export const ProfileIsLoadingAC = (answer) => ({type: IS_LOADING, answer});
export const addPostAC = (post_text) => ({type: ADD_POST, post_text});
export const deletePostAC = (post_id) => ({type: DELETE_POST, post_id});
export const setUserDataAC = (user_data) => ({type: SET_USER_DATA, user_data});
export const setStatusData = (status_data) => ({type: SET_STATUS_DATA, status_data});
export const setMoreUserData = (data) =>({type: SET_MORE_USER_DATA, data})
export const setProfilePhoto = (photos) =>({type:SET_PROFILE_PHOTO, photos })


// Thanks Creators
export const getProfileDataTC = (user_id) =>{
    return async(dispatch) =>{
        dispatch(ProfileIsLoadingAC(true))
        if (user_id) {
            let response = await ProfileAPI.getProfileData(user_id)
            dispatch(setUserDataAC(response.data))
            dispatch(ProfileIsLoadingAC(false))
        }
    }
};

export const getStatusDataTC = (user_id)=>{
    return async(dispatch) =>{
       let response = await  ProfileAPI.getStatusData(user_id)
        dispatch(setStatusData(response.data))
    }
};

export const upStatusDataTC = (new_status_data)=>{
    return async (dispatch) =>{
        let response = await ProfileAPI.upStatusData(new_status_data)
        if(response.data.resultCode == 0){
            dispatch(setStatusData(new_status_data))
        }      
    }
};
export const reqMoreUserDataTC = (user_id)=>{
    // Some requests
    // After all requests
    return(dispatch) =>{
        dispatch(setMoreUserData("somthing"))
    }
};
export const uploadPhotoTC = (photo) =>{
    return async (dispatch)=>{
        let response = await ProfileAPI.uploadPhoto(photo)
        dispatch(setProfilePhoto(response.data.data.photos))
    }
}
export default profilePageReducer;