import { getAuthDataTC } from "./authReducer";

//Actions
const INITIALIZATION_SUCCESSFUL = "app/INITIALIZATION_SUCCESSFUL";
const INITIALIZING_DEVICE = "app/INITIALIZING_DEVICE";
const SET_GLOBAL_ERROR = "app/SET_GLOBAL_ERROR";

let initialState = {
    initialized: false,
    device: "desktop",
    global_errors:[]
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESSFUL:{
            return{...state,initialized: true}
        }
        case INITIALIZING_DEVICE:{
            return{...state,device: action.answer}
        }
        case SET_GLOBAL_ERROR:{
            return{ ...state, global_errors: [...state.global_errors, action.error]}
        }
        default :{return state}
    };
};

//Action Creators
export const intializationSuccessfullAC = () => ({type: INITIALIZATION_SUCCESSFUL});
export const initializingDeviceAC = (answer) => ({type: INITIALIZING_DEVICE, answer});
export const setGlobalErrorAC = (error)=>({type: SET_GLOBAL_ERROR, error});

//Thunk Creators
export const initializeTC = () =>{
    return async (dispatch)=>{
        const promise = await dispatch(getAuthDataTC())
        if(window.innerWidth < 768){
            dispatch(initializingDeviceAC("mobile"))
        }
        dispatch(intializationSuccessfullAC());
    }
}


export default appReducer;