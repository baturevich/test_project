import { UserAPI, ProfileAPI } from "../API/Api";
import {GetCurrentDate} from '../utils/GetCurrentDate/GetCurrentDate';

//Actions
const ADD_MESS = "ADD_MESS";
const DELETE_MESSAGE = "DELETE_MESSAGE";
const SET_DIALOGS_DATA = "SET_DIALOGS_DATA";
const SET_MESSAGES_DATA ="SET_MESSAGES_DATA";
const IS_LOADING = "IS_LOADING";

type MessagesDataType ={id: number, name: string, text: string, date: string, imgUrl: string}

let initialState = {
    dialogs_data: [] as Array<{}> ,
    messages_data: [{
        id: Math.random()*3,
        name: "Kirill Baturevich",
        text: "mess_text",
        date: "12:09",
        imgUrl: "https://baturevich.ru/images/cn/user2.jpg",},] as Array<MessagesDataType>,
    mes_header_data: {},
    isLoading:false,
};

export type InitialStateType = typeof initialState;

const chatsPageReducer = (state = initialState, action:any):InitialStateType => {
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
type IsLoadingType = {type: typeof IS_LOADING, answer: boolean }
export const isLoading = (answer:boolean):IsLoadingType =>({type: IS_LOADING, answer});

type AddMessType={type: typeof ADD_MESS, mess_text: string}
export const addMess = (mess_text:string):AddMessType => ({type: ADD_MESS, mess_text});

type DelMessType = {type: typeof DELETE_MESSAGE, mess_id: number}
export const delMess = (mess_id:number):DelMessType => ({type: DELETE_MESSAGE, mess_id : mess_id});

type SetDialogsDataType ={type: typeof SET_DIALOGS_DATA, users: [] }
export const setDialogsData = (users: [] ):SetDialogsDataType =>({type: SET_DIALOGS_DATA, users});

type SetMessagesDataType = {type:typeof SET_MESSAGES_DATA, mes_data: MessagesDataType }
export const setMessagesData = (mes_data: MessagesDataType):SetMessagesDataType =>(
    {type: SET_MESSAGES_DATA, mes_data});

//Thunks Creators
export const getDialogsDataTC = (page: number, page_size: number) =>{
    return async(dispatch:any) =>{
        dispatch(isLoading(true));
        let  data  = await UserAPI.getUsers(page,page_size)
        dispatch(isLoading(false));
        dispatch(setDialogsData(data.items))
    }
};
export const getMessagesDataTC = (user_id:number) =>{
    return async(dispatch:any)=>{
        dispatch(isLoading(true));
        let response = await ProfileAPI.getProfileData(user_id)
        dispatch(isLoading(false));
        dispatch(setMessagesData(response.data))
    }
};

export default chatsPageReducer;