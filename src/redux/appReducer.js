import { getAuthDataTC } from "./authReducer";
const INITIALIZATION_SUCCESSFUL = "INITIALIZATION_SUCCESSFUL";

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESSFUL:{
            return{
                ...state,
                initialized: true
            }
        }
         default :{
            return state
        }
    };
};

export const intializationSuccessfullAC = () => ({type: INITIALIZATION_SUCCESSFUL});

export const initializeTC = () =>{
    return (dispatch)=>{
        let promise = dispatch(getAuthDataTC())
        Promise.all([promise])
        .then(()=>{
            dispatch(intializationSuccessfullAC());
        })
    }
}

export default appReducer;