import { AuthAPI, ProfileAPI } from "../API/Api";
import { stopSubmit } from "redux-form";

// Actions
const IS_LOADING = "auth/IS_LOADING";
const SET_AUTH_DATA = "auth/SET_AUTH_DATA";
const SET_AUTH_PHOTOS = "auth/SET_AUTH_PHOTOS"
const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCES = 'auth/GET_CAPTCHA_URL_SUCCES';

let initialState = {
    data :{},
    photos: {},
    isLoading: false,
    isAuth: false,
    user_data_default: {
        id: 1,
        imgUrl: "https://baturevich.ru/images/cn/user2.jpg",
        name: "No name",
        posts_count: 1,
        friends_count: 2,
        followers_count: 999,
        music_count: 15,
        videos_count: 9,
    },
    captcha_url: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:{
            return{...state, isLoading: action.answer}
        }
        case SET_AUTH_USER_DATA :{
            return{...state, data: action.auth_data, isAuth: true,}
        } 
        case GET_CAPTCHA_URL_SUCCES:{
            return{...state, captcha_url: action.captcha_url }
        } 
        case SET_AUTH_DATA:{
            return{...state, isAuth: action.answer}
        }
        case SET_AUTH_PHOTOS:{
            return{...state, photos: action.photos}
        }
         default :{
            return state
        }
    };
};


// Action Creatos
export const isAuth = ()=> (initialState.isAuth);
export const isLoadingAC = (answer) => ({type: IS_LOADING, answer});
export const setAuthData = (answer)=>({type: SET_AUTH_DATA, answer});
export const setAuthPhoto = (photos) => ({type: SET_AUTH_PHOTOS, photos});
export const setAuthUserDataAC = (auth_data) => ({type: SET_AUTH_USER_DATA, auth_data});
export const getCaptchaUrlSucces = (captcha_url) =>({type: GET_CAPTCHA_URL_SUCCES, captcha_url})


// Thanks Creators
export const getAuthDataTC = () =>{
    return async (dispatch)=>{
     const response = await AuthAPI.getAuthData();
        if (response.data.resultCode == 0) {
            dispatch(setAuthUserDataAC(response.data.data));
        }
    }
}

export const loginTC = (login_data)=>{
    return async (dispatch)=>{
        dispatch(isLoadingAC(true))
       const response = await AuthAPI.authorize(login_data);
        if (response.data.resultCode == 0) {
            dispatch(setAuthData(true));
            dispatch(isLoadingAC(false));
        }
        else {
            if(response.data.resultCode == 10){
               const response = await AuthAPI.getCaptchaURL()
               dispatch(getCaptchaUrlSucces(response.data.url))
            }
            dispatch(stopSubmit("login", { _error: response.data.messages[0] }));
        }
        return response.data.resultCode;
    }  
}
export const reqAuthPhoto = (user_id) =>{
    return async (dispatch)=>{
        const response  = await ProfileAPI.getProfileData(user_id)
            dispatch(setAuthPhoto(response.data.photos))    
    }
}
export const deLoginTC = ()=>{
    return async (dispatch)=>{
       const response = await AuthAPI.deAuthorize()
            if(response.data.resultCode == 0 ){
                dispatch(setAuthData(false))
            }             
    }
}
export default authReducer;