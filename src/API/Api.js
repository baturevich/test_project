import Axios from 'axios'

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '28997550-8233-4ca6-9877-0023cdccb20d',
    },
})
export const UserAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
            return response.data
        })
    }
};

export const FollowAPI = {
    follow(user_id){
        return instance.post(`follow/${user_id}`, {},)
            
    },
    unfollow(user_id){
        return instance.delete(`follow/${user_id}`,)
    },
};

export const ProfileAPI ={
    getProfileData(user_id){
        return instance.get(`profile/${+user_id}`)
    }
};

export const AuthAPI = {
    getAuthData(){
        return instance.get('auth/me')
    }
};