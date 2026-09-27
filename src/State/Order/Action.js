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
import { api } from "../../config/apiConfig";


export const createOrder = (reqData) => async (dispatch) => {
     dispatch({type: CREATE_ORDER_REQUEST});
    console.log("req data", reqData);
    try {
       
        const { data } = await api.post(
            `/api/orders/`,
            reqData.address,
        );

        if(data.id){
            reqData.navigate({ search: `step=3&order_id=${data.id}` });
        }
        console.log("created order - ",data);
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload:data,
        });
    } catch (error) {
        console.log("catch error : ",error);
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message,
        });
    }
};

export const getOrderById = (orderId) => async (dispatch)=>{
    dispatch({type: GET_ORDER_BY_ID_REQUEST});
    try {
        const { data } = await api.get(
            `/api/orders/${orderId}`,
        );

        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message,
        });
    }
};

export const getOrderHistory = () => async (dispatch) => {
    dispatch({type: GET_ORDER_HISTORY_REQUEST});
    try {
        const { data } = await api.get("/api/orders/user");
        dispatch({type: GET_ORDER_HISTORY_SUCCESS, payload: data});
        return data;
    } catch (error) {
        dispatch({type: GET_ORDER_HISTORY_FAILURE, payload: error.response?.data?.message || error.message});
        return undefined;
    }
};

export const getAdminOrders = () => async (dispatch) => {
    dispatch({type: GET_ADMIN_ORDERS_REQUEST});
    try {
        const { data } = await api.get("/api/admin/orders/");
        dispatch({type: GET_ADMIN_ORDERS_SUCCESS, payload: data});
        return data;
    } catch (error) {
        dispatch({type: GET_ADMIN_ORDERS_FAILURE, payload: error.response?.data?.message || error.message});
        return undefined;
    }
};

const orderStatusEndpoints = {
    CONFIRMED: "confirmed",
    SHIPPED: "ship",
    DELIVERED: "deliver",
    CANCELLED: "cancel",
};

export const updateAdminOrderStatus = (orderId, status) => async (dispatch) => {
    dispatch({type: UPDATE_ADMIN_ORDER_STATUS_REQUEST});
    const endpoint = orderStatusEndpoints[status];
    if (!endpoint) {
        dispatch({type: UPDATE_ADMIN_ORDER_STATUS_FAILURE, payload: `Unsupported order status: ${status}`});
        return undefined;
    }

    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/${endpoint}`);
        dispatch({type: UPDATE_ADMIN_ORDER_STATUS_SUCCESS, payload: data});
        await dispatch(getAdminOrders());
        return data;
    } catch (error) {
        dispatch({type: UPDATE_ADMIN_ORDER_STATUS_FAILURE, payload: error.response?.data?.message || error.message});
        return undefined;
    }
};
