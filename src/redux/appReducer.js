import { getAuthDataTC } from "./authReducer";
const INITIALIZATION_SUCCESSFUL = "app/INITIALIZATION_SUCCESSFUL";
const INITIALIZING_DEVICE = "app/INITIALIZING_DEVICE"
let initialState = {
    initialized: false,
    device: "desktop",
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESSFUL:{
            return{
                ...state,
                initialized: true
            }
        }
        case INITIALIZING_DEVICE:{
            return{
                ...state,
                device: action.answer
            }
        }
         default :{
            return state
        }
    };
};

export const intializationSuccessfullAC = () => ({type: INITIALIZATION_SUCCESSFUL});
export const initializingDeviceAC = (answer) => ({type: INITIALIZING_DEVICE, answer});

export const initializeTC = () =>{
    return (dispatch)=>{
        let promise = dispatch(getAuthDataTC())
        Promise.all([promise])
        .then(()=>{
            if(window.innerWidth < 768){
                dispatch(initializingDeviceAC("mobile"))
            }
            dispatch(intializationSuccessfullAC());
        })
    }
}

export default appReducer;