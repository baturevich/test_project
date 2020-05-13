
export const isAuthUserPage = (auth_user_id, url_user_id)=>{
    if(auth_user_id == url_user_id){
        return true
    } else{
        return false
    }
}
