import { createStore, combineReducers } from "redux";
import headerReducer from "./headerReducer";
import profilePageReducer from "./profilePageReducer";
import chatsPageReducer from "./chatsPageReducer";
import userPageReducer from "./usersPageReducer";


let reducers = combineReducers({
    profile_page: profilePageReducer,
    chats_page: chatsPageReducer,
    header: headerReducer,
    users_page: userPageReducer,
})
let store = createStore(reducers);

window.store = store;
export default store;