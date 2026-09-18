import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

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

