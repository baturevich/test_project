// Profile selectors
export const getProfileUserData = (state) => {
    return state.profile_page.user_data;
};
export const getProfileIsLoading = (state)=>{
    return state.profile_page.isLoading
};