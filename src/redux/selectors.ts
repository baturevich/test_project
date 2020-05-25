import { AppStateType } from './store';
// Profile selectors
export const getProfileUserData = (state: AppStateType) => {
    return state.profile_page.user_data;
};
export const getProfileIsLoading = (state: AppStateType)=>{
    return state.profile_page.isLoading
};