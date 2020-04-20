import { createStore, combineReducers } from "redux";
import headerReducer from "./headerReducer";
import profilePageReducer from "./profilePageReducer";
import chatsPageReducer from "./chatsPageReducer";


let reducers = combineReducers({
    profile_page: profilePageReducer,
    chats_page: chatsPageReducer,
    header: headerReducer,
})
let store = createStore(reducers);

window.store = store;
export default store;