import { UserAPI, ProfileAPI } from "../API/Api";

let now = new Date(),
    hour = now.getHours(),
    minutes = now.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
let currentData = hour + ":" + minutes;

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
        case 'ADD_MESS':{
            let mess_text = action.mess_text;
            let mess_id = state.messages_data.length;
            let new_mess = {
                id: mess_id,
                name: "Kirill Baturevich",
                text: mess_text,
                date: currentData,
                imgUrl: "https://baturevich.ru/images/cn/user2.jpg",
            };
            if (mess_text != "") {             
                let state_copy = {...state};
                state_copy.messages_data = [...state.messages_data];
                state_copy.messages_data.push(new_mess);
                return state_copy  
            };          
        }
        case 'DELETE_MESSAGE':{
            return {
                ...state,
                messages_data: state.messages_data.filter( m => {
                    if(m.id != action.mess_id){
                        return m
                    }
                })
            }
        }case 'SET_DIALOGS_DATA':{
            return {
                ...state, dialogs_data: action.users
            }
        }
        case 'SET_MESSAGES_DATA':{
            return {
                ...state, mes_header_data: action.mes_data
            }
        }   
        case 'IS_LOADING':{
            return {
                ...state, isLoading: action.answer
            }
        }   
        default:
            return state;
    };
};

export const addMessAC = (mess_text) => ({type: 'ADD_MESS', mess_text});
export const delMessAC = (mess_id) => ({type: 'DELETE_MESSAGE', mess_id : mess_id});
export const setDialogsDataAC = (users) =>({type: 'SET_DIALOGS_DATA', users});
export const setMessagesDataAC = (mes_data)=>({type: 'SET_MESSAGES_DATA', mes_data});
export const isLoadingAC = (answer)=>({type: 'IS_LOADING', answer});

export const getDialogsDataTC = (page,page_size) =>{
    return (dispatch) =>{
        dispatch(isLoadingAC(true));
        UserAPI.getUsers(page,page_size)
            .then(data=>{    
                dispatch(isLoadingAC(false));
                dispatch(setDialogsDataAC(data.items))
        })
    }
};
export const getMessagesDataTC = (user_id) =>{
    return (dispatch)=>{
        dispatch(isLoadingAC(true));
        ProfileAPI.getProfileData(user_id)
        .then(response=>{
            dispatch(isLoadingAC(false));
            dispatch(setMessagesDataAC(response.data))
        })
    }
};

export default chatsPageReducer;