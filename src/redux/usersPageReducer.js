let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount:0,
    currentPage: 1,
};

const userPageReducer = (state = initialState, action) => {
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
        case 'SET_CURRENT_PAGE':{
            return{...state, currentPage: action.current_page}
        }
        case 'SET_TOTAL_USER_COUNT':{
            return{...state, totalUsersCount: action.user_count}
        }
         default :{
            return state
        }
    };
};

export const followAC = (user_id) => ({type: 'FOLLOW', user_id: user_id});
export const unfollowAC = (user_id) => ({type: 'UNFOLLOW', user_id: user_id});
export const setUsersAC = (users) => ({type: 'SET_USERS', users: users});
export const setCurrentPagesAC = (current_page) => ({type: 'SET_CURRENT_PAGE', current_page});
export const setTotalUserCountAC = (user_count) => ({type: 'SET_TOTAL_USER_COUNT', user_count});
export default userPageReducer;