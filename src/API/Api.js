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
    },
    getStatusData(user_id){
        return instance.get(`profile/status/${+ user_id}`)
    },
    upStatusData(status){
        return instance.put(`profile/status`,{status})
    },
    uploadPhoto(photo){
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData ,{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
    },
};

export const AuthAPI = {
    getAuthData(){
        return instance.get('auth/me')
    },
    authorize(login_data){
        return instance.post(`auth/login`, login_data)
    },
    deAuthorize(){
        return instance.delete(`auth/login`,)
    }
};