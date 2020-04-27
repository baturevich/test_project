import { AuthAPI } from "../API/Api";
let initialState = {
    data :{},
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
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_USER_DATA':{
            return{
                ...state,
                data: action.auth_data,
                isAuth: true,
            }
        }
        case 'IS_LOADING':{
            return{...state, isLoading: action.answer}
        }
         default :{
            return state
        }
    };
};

export const setAuthUserDataAC = (auth_data) => ({type: 'SET_AUTH_USER_DATA', auth_data});
export const isLoadingAC = (answer) => ({type: 'IS_LOADING', answer});
export const isAuth = ()=> (initialState.isAuth)

export const getAuthDataTC = () =>{
    return (dispatch)=>{
      AuthAPI.getAuthData()
          .then(response=>{
              let isLogin = response.data.resultCode;
              if(isLogin == 0){
                dispatch(setAuthUserDataAC(response.data.data))
              } 
          })
    }
  }
export default authReducer;