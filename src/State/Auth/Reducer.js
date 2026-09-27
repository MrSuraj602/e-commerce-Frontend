import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const persistedJwt = localStorage.getItem("jwt") || localStorage.getItem("token");
const persistedRole = localStorage.getItem("role");

const initialState={
    user:null,
    isLoading:false,
    error:null,
    jwt:persistedJwt,
    role:persistedRole
}

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state, isLoading:true,error:null}
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading:false,
                error:null,
                jwt:typeof action.payload === "string" ? action.payload : action.payload.jwt,
                role:typeof action.payload === "string" ? state.role : action.payload.role
            }
        case GET_USER_SUCCESS:
            return {...state, isLoading:false, error:null, user:action.payload, role:action.payload.role}
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return {...state, isLoading:false, error:action.payload}
        
        case LOGOUT:
            return {...initialState, user:null, jwt:null, role:null, isLoading:false, error:null}
        
            default:
                return state;
    }
}

