import { getAuthDataTC } from "./authReducer";

//Actions
const INITIALIZATION_SUCCESSFUL = "app/INITIALIZATION_SUCCESSFUL";
const INITIALIZING_DEVICE = "app/INITIALIZING_DEVICE";
const SET_GLOBAL_ERROR = "app/SET_GLOBAL_ERROR";


type GlobalErrorsType = Array<{}>;
export type DeviceType =  "desktop" | "mobile"


let initialState = {
    initialized: false,
    device: "desktop" as DeviceType ,
    global_errors: [] as GlobalErrorsType ,
};
export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case INITIALIZATION_SUCCESSFUL:{
            return{...state, initialized: true}
        }
        case INITIALIZING_DEVICE:{
            return{...state, device: action.answer}
        }
        case SET_GLOBAL_ERROR:{
            return{ ...state, global_errors: [...state.global_errors, action.error]}
        }
        default :{return state}
    };
};

//Action Creators


type IntializationSuccessfullACType = {type: typeof INITIALIZATION_SUCCESSFUL}
export const intializationSuccessfullAC = ():IntializationSuccessfullACType => ({type: INITIALIZATION_SUCCESSFUL});

type InitializingDeviceACType = {type: typeof INITIALIZING_DEVICE ,answer: string,}
export const initializingDeviceAC = (answer:string):InitializingDeviceACType => ({type: INITIALIZING_DEVICE, answer});

type SetGlobalErrorACType = {type: typeof SET_GLOBAL_ERROR, error: string }
export const setGlobalErrorAC = (error:string):SetGlobalErrorACType =>({type: SET_GLOBAL_ERROR, error});

//Thunk Creators
export const initializeTC = () => async (dispatch:any)=>{
        const promise = await dispatch(getAuthDataTC())
        if(window.innerWidth < 768){
            dispatch(initializingDeviceAC("mobile"))
        }
        dispatch(intializationSuccessfullAC());
    }


export default appReducer;