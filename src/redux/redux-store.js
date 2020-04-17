import { createStore, combineReducers } from "redux";
import addPostReducer from "./addPostReducer";
import addMessReducer from "./addMessReducer";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    profile_page: addPostReducer,
    chats_page: addMessReducer,
    header: headerReducer,
})
let store = createStore(reducers);

window.store = store;
export default store;