import { createStore, combineReducers, applyMiddleware } from "redux";
import headerReducer from "./headerReducer";
import profilePageReducer from "./profilePageReducer";
import chatsPageReducer from "./chatsPageReducer";
import userPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    profile_page: profilePageReducer,
    chats_page: chatsPageReducer,
    header: headerReducer,
    users_page: userPageReducer,
    auth_data: authReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;