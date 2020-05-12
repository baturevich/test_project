import { UserAPI, ProfileAPI } from "../API/Api";
import {GetCurrentDate} from '../utils/GetCurrentDate/GetCurrentDate';

//Actions
const ADD_MESS = "ADD_MESS";
const DELETE_MESSAGE = "DELETE_MESSAGE";
const SET_DIALOGS_DATA = "SET_DIALOGS_DATA";
const SET_MESSAGES_DATA ="SET_MESSAGES_DATA";
const IS_LOADING = "IS_LOADING";


let initialState = {
    dialogs_data: [],
    messages_data: [{
        id: Math.random()*3,
        name: "Kirill Baturevich",
        text: "mess_text",
        date: "12:09",
        imgUrl: "https://baturevich.ru/images/cn/user2.jpg",},],
    mes_header_data: {},
    isLoading:false,
};
const chatsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:{
            return {
                ...state, isLoading: action.answer
            }
        }
        case ADD_MESS:{
            let mess_text = action.mess_text;
            let mess_id = state.messages_data.length;
            let new_mess = {
                id: mess_id,
                name: "Kirill Baturevich",
                text: mess_text,
                date: GetCurrentDate("small_date"),
                imgUrl: "https://baturevich.ru/images/cn/user2.jpg",
            };
            if (mess_text) {            
                return{
                    ...state,
                    messages_data: [...state.messages_data, new_mess]
                }
            };          
        }
        case DELETE_MESSAGE:{
            return {
                ...state,
                messages_data: state.messages_data.filter( m => m.id != action.mess_id)
            }
        }case SET_DIALOGS_DATA:{
            return {
                ...state, dialogs_data: action.users
            }
        }
        case SET_MESSAGES_DATA:{
            return {
                ...state, mes_header_data: action.mes_data
            }
        }   
        default:
            return state;
    };
};
//Actions Creators
export const isLoadingAC = (answer)=>({type: IS_LOADING, answer});
export const addMessAC = (mess_text) => ({type: ADD_MESS, mess_text});
export const delMessAC = (mess_id) => ({type: DELETE_MESSAGE, mess_id : mess_id});
export const setDialogsDataAC = (users) =>({type: SET_DIALOGS_DATA, users});
export const setMessagesDataAC = (mes_data)=>({type: SET_MESSAGES_DATA, mes_data});

//Thunks Creators
export const getDialogsDataTC = (page,page_size) =>{
    return async(dispatch) =>{
        dispatch(isLoadingAC(true));
        let  data  = await UserAPI.getUsers(page,page_size)
        dispatch(isLoadingAC(false));
        dispatch(setDialogsDataAC(data.items))
    }
};
export const getMessagesDataTC = (user_id) =>{
    return async(dispatch)=>{
        dispatch(isLoadingAC(true));
        let response = await ProfileAPI.getProfileData(user_id)
        dispatch(isLoadingAC(false));
        dispatch(setMessagesDataAC(response.data))
    }
};

export default chatsPageReducer;