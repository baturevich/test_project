import { PhotosType } from './authReducer';
import { ProfileAPI } from "../API/Api";
import { GetCurrentDate } from "../utils/GetCurrentDate/GetCurrentDate";
import { stopSubmit } from "redux-form";
import { setGlobalErrorAC } from "./appReducer";

const ADD_POST = "profile/ADD_POST";
const IS_LOADING = "profile/IS_LOADING";
const DELETE_POST = "profile/DELETE_POST";
const SET_USER_DATA = "profile/SET_USER_DATA";
const SET_STATUS_DATA = "profile/SET_STATUS_DATA";
const SET_PROFILE_PHOTO = "profile/SET_PROFILE_PHOTO"

//Types
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type UserDataType ={
    id: number, 
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
}
type PostsDataType ={
    id: string,name: string, date: string, text: string, imgUrl: string, likeCounts: number, commentCounts: number
}
export type InitialStateType = typeof initialState;
// State
let initialState =   {
    isSetProfileData: false,
    user_data: {} as UserDataType, 
    status_data: "", 
    posts_data:[] as Array<PostsDataType> , 
    isLoading: false,
};

const profilePageReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case IS_LOADING:{
            return{...state, isLoading: action.answer}
        }
        case ADD_POST:{
            let post_text = action.post_text;
            let newPost = { 
                id: state.posts_data.length,
                name: state.user_data.fullName,
                date: GetCurrentDate("full_date"),
                text: post_text,
                imgUrl: state.user_data.photos.small,
                likeCounts: 0,
                commentCounts: 0
            };        
            if(post_text !== ''){
                return{
                    ...state,
                    posts_data: [...state.posts_data, newPost] as Array<PostsDataType>,
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
        default:
            return state;
    };
};

// Action Creators

type ProfileIsLoadingType ={type: typeof IS_LOADING, answer: boolean}
export const profileIsLoading = (answer:boolean):ProfileIsLoadingType => ({type: IS_LOADING, answer});

type AddPostType = {type: typeof ADD_POST, post_text: string }
export const addPost = (post_text: string): AddPostType => ({type: ADD_POST, post_text});

type DeletePostType = {type: typeof DELETE_POST, post_id: number}
export const deletePost = (post_id: number): DeletePostType => ({type: DELETE_POST, post_id});

type SetUserDataType = {type: typeof SET_USER_DATA, user_data: UserDataType}
export const setUserData = (user_data: UserDataType): SetUserDataType => ({type: SET_USER_DATA, user_data});

type SetStatusDataType = {type: typeof SET_STATUS_DATA, status_data: string}
export const setStatusData = (status_data: string): SetStatusDataType => ({type: SET_STATUS_DATA, status_data});

type SetProfilePhotoType = {type: typeof SET_PROFILE_PHOTO, photos: PhotosType}
export const setProfilePhoto = (photos: PhotosType):SetProfilePhotoType =>({type:SET_PROFILE_PHOTO, photos })


// Thanks Creators
export const getProfileDataTC = (user_id: number) =>{
    return async(dispatch: any) =>{
        dispatch(profileIsLoading(true))
        if (user_id) {
            let response = await ProfileAPI.getProfileData(user_id)
            dispatch(setUserData(response.data))
            dispatch(profileIsLoading(false))
        }
    }
};

export const getStatusDataTC = (user_id: number)=>{
    return async(dispatch: any) =>{
       let response = await  ProfileAPI.getStatusData(user_id)
        dispatch(setStatusData(response.data))
    }
};

export const upStatusDataTC = (new_status_data: string)=>{
    return async (dispatch: any) =>{
        try{
            let response = await ProfileAPI.upStatusData(new_status_data)
            if(response.data.resultCode == 0){
                dispatch(setStatusData(new_status_data))
            } 
        } catch(error){
            dispatch(setGlobalErrorAC(error.message))
        }      
    }
};
export const uploadPhotoTC = (photo:PhotosType) =>{
    return async (dispatch: any)=>{
        let response = await ProfileAPI.uploadPhoto(photo)
        dispatch(setProfilePhoto(response.data.data.photos))
    }
}
export const updateProfileInfoTC = (data: UserDataType)=>{
    return async (dispatch: any, getState: any)=>{
        const user_id = getState().auth_data.data.id
        let response = await ProfileAPI.upProfileInfo(data)
        if(response.data.resultCode == 0){
            dispatch(getProfileDataTC(user_id))
        } else{
            dispatch(stopSubmit("edit_profile_info", { _error: response.data.messages[0] }));
        }
       
    }
}
export default profilePageReducer;