import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    GET_ORDER_BY_ID_FAILURE,
    GET_ORDER_BY_ID_REQUEST,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_HISTORY_FAILURE,
    GET_ORDER_HISTORY_REQUEST,
    GET_ORDER_HISTORY_SUCCESS,
    GET_ADMIN_ORDERS_FAILURE,
    GET_ADMIN_ORDERS_REQUEST,
    GET_ADMIN_ORDERS_SUCCESS,
    UPDATE_ADMIN_ORDER_STATUS_FAILURE,
    UPDATE_ADMIN_ORDER_STATUS_REQUEST,
    UPDATE_ADMIN_ORDER_STATUS_SUCCESS,
} from "./ActionType";

const initialState = {
    orders: [],
    order: null,
    error: null,
    loading: false,
}

export const orderReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return{
                ...state,
                loading: true,
                error:null
            };
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading:false,
                success: true,
                order: action.payload,
                error:null,
            };
        case CREATE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case GET_ORDER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error:null,
            };
        case GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                order: action.payload,
            };
        case GET_ORDER_HISTORY_REQUEST:
        case GET_ADMIN_ORDERS_REQUEST:
            return {...state, loading: true, error: null};
        case GET_ORDER_HISTORY_SUCCESS:
        case GET_ADMIN_ORDERS_SUCCESS:
            return {...state, loading: false, error: null, orders: action.payload};
        case GET_ORDER_HISTORY_FAILURE:
        case GET_ADMIN_ORDERS_FAILURE:
            return {...state, loading: false, error: action.payload};
        case UPDATE_ADMIN_ORDER_STATUS_REQUEST:
            return {...state, loading: true, error: null};
        case UPDATE_ADMIN_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                order: state.order?.id === action.payload.id ? action.payload : state.order,
                orders: state.orders.map((order) => order.id === action.payload.id ? action.payload : order),
            };
        case UPDATE_ADMIN_ORDER_STATUS_FAILURE:
            return {...state, loading: false, error: action.payload};
        case GET_ORDER_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
