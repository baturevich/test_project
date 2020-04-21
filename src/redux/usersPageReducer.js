let initialState = {
    users: []
};

const userPageReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case 'FOLLOW':{
            return{
                ...state,
                users: state.users.map(u =>{
                    if(u.id === action.user_id){
                       return{...u, followed:true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW':{
            return{
                ...state,
                users: state.users.map(u =>{
                    if(u.id === action.user_id){
                       return{...u, followed:false}
                    }
                    return u
                })
            }
        }
        case 'SET_USERS':{
            return{...state, users: action.users}
        }
         default :{
            return state
        }
    };
};

export const followAC = (user_id) => ({type: 'FOLLOW', user_id: user_id});
export const unfollowAC = (user_id) => ({type: 'UNFOLLOW', user_id: user_id});
export const setUsersAC = (users) => ({type: 'SET_USERS', users: users})
export default userPageReducer;