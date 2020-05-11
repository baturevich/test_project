import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import headerReducer from "./headerReducer";
import profilePageReducer from "./profilePageReducer";
import chatsPageReducer from "./chatsPageReducer";
import userPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

let reducers = combineReducers({
    profile_page: profilePageReducer,
    chats_page: chatsPageReducer,
    header: headerReducer,
    users_page: userPageReducer,
    auth_data: authReducer,
    app: appReducer,
    form: formReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)))

window.__store__ = store;
export default store;