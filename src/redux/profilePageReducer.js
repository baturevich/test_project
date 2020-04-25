import { ProfileAPI } from "../API/Api";


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
};
let currentData = day + " " + fmonth + " at " + hour + ":" + minutes;

let initialState =   {
    user_data: {

    },
    new_post_data:{
        id: 1,
        new_post_text: "i can do it",
    },
    posts_data:[],
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
    isLoading: false,
};
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UP_NEW_POST_TEXT':{
            let state_copy = {...state};
            state_copy.new_post_data = {...state.new_post_data};
            state_copy.new_post_data.new_post_text = action.post_text;
            return state_copy;
        }
        case 'ADD_POST':{
            let post_text = state.new_post_data.new_post_text;
            let imgUrl = state.user_data.imgUrl ? state.user_data.imgUrl : state.user_data_default.imgUrl
            let newPost = {
                id: 3,
                name: state.user_data.name ? state.user_data.name : state.user_data_default.name ,
                date: currentData,
                text: post_text,
                imgUrl: imgUrl,
                likeCounts: 0,
                commentCounts: 0
            };        
            if(post_text != ''){
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
                    if(p.id != action.post_id){
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
        case 'IS_LOADING':{
            return{...state, isLoading: action.answer}
        }
        default:
            return state;
    };
    

};



export const upNewPostTextAC = (post_text) => ({type: 'UP_NEW_POST_TEXT', post_text});
export const addPostAC = () => ({type: 'ADD_POST'});
export const deletePostAC = (post_id) => ({type: 'DELETE_POST', post_id});
export const setUserDataAC = (user_data) => ({type: 'SET_USER_DATA', user_data});
export const ProfileIsLoadingAC = (answer) => ({type: 'IS_LOADING', answer});

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
export default profilePageReducer;