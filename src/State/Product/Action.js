import { api } from "../../config/apiConfig";
import {
    ADMIN_PRODUCT_MUTATION_FAILURE,
    ADMIN_PRODUCT_MUTATION_REQUEST,
    ADMIN_PRODUCT_MUTATION_SUCCESS,
    ADMIN_PRODUCTS_FAILURE,
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCTS_FAILURE,
    FIND_PRODUCTS_REQUEST,
    FIND_PRODUCTS_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {

    dispatch({type:FIND_PRODUCTS_REQUEST})

    const { colors, size, minPrice = 0, maxPrice = 0, minDiscount = 0, category = '', stock = '', sort = 'price_low', pageNumber = 0, pageSize = 10 } = reqData;

    try {
        const params = new URLSearchParams({
            color: colors ?? '',
            size: size ?? '',
            minPrice: minPrice ?? 0,
            maxPrice: maxPrice ?? 0,
            minDiscount: minDiscount ?? 0,
            category: category ?? '',
            stock: stock ?? '',
            sort: sort ?? 'price_low',
            pageNumber: pageNumber ?? 0,
            pageSize: pageSize ?? 10,
        });

        const { data } = await api.get(`/api/products?${params.toString()}`)

        dispatch({type:FIND_PRODUCTS_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
}



export const findProductsById = (reqData) => async (dispatch) => {

    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})

    const { productId } = reqData;
    try {
        const {data} = await api.get(`/api/products/${productId}`)

        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}

const requestFailureMessage = (error) => error.response?.data?.message || error.message;

export const loadAdminProducts = () => async (dispatch) => {
    dispatch({type: ADMIN_PRODUCTS_REQUEST});
    try {
        const { data } = await api.get("/api/admin/products/all");
        dispatch({type: ADMIN_PRODUCTS_SUCCESS, payload: data});
        return data;
    } catch (error) {
        dispatch({type: ADMIN_PRODUCTS_FAILURE, payload: requestFailureMessage(error)});
        return undefined;
    }
};

export const createAdminProduct = (product) => async (dispatch) => {
    dispatch({type: ADMIN_PRODUCT_MUTATION_REQUEST});
    try {
        const { data } = await api.post("/api/admin/products/", product);
        dispatch({type: ADMIN_PRODUCT_MUTATION_SUCCESS});
        await dispatch(loadAdminProducts());
        return data;
    } catch (error) {
        dispatch({type: ADMIN_PRODUCT_MUTATION_FAILURE, payload: requestFailureMessage(error)});
        return undefined;
    }
};

export const updateAdminProduct = (productId, product) => async (dispatch) => {
    dispatch({type: ADMIN_PRODUCT_MUTATION_REQUEST});
    try {
        const { data } = await api.put(`/api/admin/products/${productId}/update`, product);
        dispatch({type: ADMIN_PRODUCT_MUTATION_SUCCESS});
        await dispatch(loadAdminProducts());
        return data;
    } catch (error) {
        dispatch({type: ADMIN_PRODUCT_MUTATION_FAILURE, payload: requestFailureMessage(error)});
        return undefined;
    }
};

export const deleteAdminProduct = (productId) => async (dispatch) => {
    dispatch({type: ADMIN_PRODUCT_MUTATION_REQUEST});
    try {
        const { data } = await api.delete(`/api/admin/products/${productId}/delete`);
        dispatch({type: ADMIN_PRODUCT_MUTATION_SUCCESS});
        await dispatch(loadAdminProducts());
        return data;
    } catch (error) {
        dispatch({type: ADMIN_PRODUCT_MUTATION_FAILURE, payload: requestFailureMessage(error)});
        return undefined;
    }
};

