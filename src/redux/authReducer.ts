import { stopSubmit } from 'redux-form';
import { AuthAPI, ProfileAPI } from "../API/Api";

// Actions
const IS_LOADING = "auth/IS_LOADING";
const SET_AUTH_DATA = "auth/SET_AUTH_DATA";
const SET_AUTH_PHOTOS = "auth/SET_AUTH_PHOTOS"
const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCES = 'auth/GET_CAPTCHA_URL_SUCCES';

type DataType = {
    id:  number,
    login: string,
    email: string,
}
export type PhotosType = {
    small: string,
    large: string,
}
let initialState = {
    data :{} as DataType,
    photos: {} as PhotosType,
    isLoading: false,
    isAuth: false,
    captcha_url: null as string | null,
};
export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action:any):InitialStateType => {
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

export const isAuth = ()=> (initialState.isAuth);
// Action Creatos

type IsLoadingType  ={type: typeof IS_LOADING, answer: boolean}
export const isLoading = (answer: boolean): IsLoadingType => ({type: IS_LOADING, answer});

type SetAuthDataTtype = {type: typeof SET_AUTH_DATA, answer: boolean }
export const setAuthData = (answer: boolean):SetAuthDataTtype =>({type: SET_AUTH_DATA, answer});

type SetAuthPhotoType  ={ type: typeof SET_AUTH_PHOTOS, photos: PhotosType}
export const setAuthPhoto = (photos:PhotosType):SetAuthPhotoType => ({type: SET_AUTH_PHOTOS, photos});

type SetAuthUserDataType = {type: typeof SET_AUTH_USER_DATA, auth_data: DataType}
export const setAuthUserData = (auth_data: DataType):SetAuthUserDataType => (
    {type: SET_AUTH_USER_DATA, auth_data});

type GetCaptchaUrlSuccesType ={type: typeof GET_CAPTCHA_URL_SUCCES, captcha_url: string}
export const getCaptchaUrlSucces = (captcha_url: string):GetCaptchaUrlSuccesType =>(
    {type: GET_CAPTCHA_URL_SUCCES, captcha_url})


// Thanks Creators
export const getAuthDataTC = () =>{
    return async (dispatch:any)=>{
     const response = await AuthAPI.getAuthData();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data));
            dispatch(reqAuthPhoto(response.data.data.id));
            dispatch(setAuthData(true));
        }
    }
}

export const loginTC = (login_data: Object)=>{
    return async (dispatch: any)=>{
        dispatch(isLoading(true))
       const response = await AuthAPI.authorize(login_data);
        if (response.data.resultCode == 0) {
            dispatch(isLoading(false));
            dispatch(getAuthDataTC());
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
export const reqAuthPhoto = (user_id: number ) =>{
    return async (dispatch: any)=>{
        const response  = await ProfileAPI.getProfileData(user_id)
            dispatch(setAuthPhoto(response.data.photos))    
    }
}
export const deLoginTC = ()=>{
    return async (dispatch:any)=>{
       const response = await AuthAPI.deAuthorize()
            if(response.data.resultCode == 0 ){
                dispatch(setAuthData(false))
            }             
    }
}
export default authReducer;