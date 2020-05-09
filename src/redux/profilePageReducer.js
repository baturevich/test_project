import { ProfileAPI } from "../API/Api";
export const getProfileUserData = (state) => {
    return state.profile_page.user_data;
}
export const getProfileIsLoading = (state)=>{
    return state.profile_page.isLoading
}

let now = new Date(),
    day = now.getDate(),
    month = now.getMonth(),
    hour = now.getHours(),
    minutes = now.getMinutes(),
    fmonth;
if (minutes < 10) {
    minutes = "0" + minutes;
};
switch (month) {
    case 0: fmonth = "Jan"; break;
    case 1: fmonth = "Feb"; break;
    case 2: fmonth = "March"; break;
    case 3: fmonth = "Apr"; break;
    case 4: fmonth = "May"; break;
    case 5: fmonth = "June"; break;
    case 6: fmonth = "July"; break;
    case 7: fmonth = "Aug"; break;
    case 8: fmonth = "Sep"; break;
    case 9: fmonth = "Oct"; break;
    case 10: fmonth = "Nov"; break;
    case 11: fmonth = "Dec"; break;
    default: ;
};
let currentData = day + " " + fmonth + " at " + hour + ":" + minutes;

let initialState =   {
    user_data: {},
    status_data: "",
    posts_data:[],
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
    isLoading: false,
};
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOADING':{
            return{...state, isLoading: action.answer}
        }
        case 'ADD_POST':{
            let post_text = action.post_text;
            let imgUrl = state.user_data.imgUrl ? state.user_data.imgUrl : state.user_data_default.photos.small ;
            let post_id  = state.posts_data.length;
            let newPost = {
                id: post_id,
                name: state.user_data.name ? state.user_data.name : state.user_data_default.name ,
                date: currentData,
                text: post_text,
                imgUrl: imgUrl,
                likeCounts: 0,
                commentCounts: 0
            };        
            if(post_text !== ''){
                let state_copy = {...state};
                state_copy.posts_data = [...state.posts_data];
                state_copy.new_post_data = {...state.new_post_data};
                state_copy.posts_data.unshift(newPost);
                state_copy.new_post_data.new_post_text = '';
                return state_copy;
            }       
        }
        case 'DELETE_POST':{
            return {
                ...state,
                posts_data: state.posts_data.filter( p =>{
                    if(p.id !== action.post_id){
                        return p
                    }
                })
            }
        }
        case 'SET_USER_DATA':{
            return {
                ...state,
                user_data: action.user_data
            }
        }
        case 'SET_STATUS_DATA':{
            return {
                ...state,
                status_data: action.status_data
            }
        }
        default:
            return state;
    };
};


export const ProfileIsLoadingAC = (answer) => ({type: 'IS_LOADING', answer});
export const addPostAC = (post_text) => ({type: 'ADD_POST', post_text});
export const deletePostAC = (post_id) => ({type: 'DELETE_POST', post_id});
export const setUserDataAC = (user_data) => ({type: 'SET_USER_DATA', user_data});
export const setStatusData = (status_data) => ({type: 'SET_STATUS_DATA', status_data});

export const getProfileDataTC = (user_id) =>{
    return (dispatch) =>{
        dispatch(ProfileIsLoadingAC(true))
        if (user_id) {
            ProfileAPI.getProfileData(user_id)
                .then(response => {
                    dispatch(setUserDataAC(response.data))
                    dispatch(ProfileIsLoadingAC(false))
                });
        }
    }
};

export const getStatusDataTC = (user_id)=>{
    
    return (dispatch) =>{
        ProfileAPI.getStatusData(user_id)
        .then(response =>{
            dispatch(setStatusData(response.data))
        })
    }
};

export const upStatusDataTC = (new_status_data)=>{
    return (dispatch) =>{
        ProfileAPI.upStatusData(new_status_data)
        .then(response =>{
            if(response.data.resultCode == 0){
                dispatch(setStatusData(new_status_data))
            }      
        })
    }
};
export default profilePageReducer;