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

const initialState = {
    products:[],
    product:null,
    loading:false,
    error:null,
    adminProducts:[],
    adminLoading:false,
    adminMutating:false,
    adminError:null
}

export const customerProductReducer = (state=initialState,action)=>{

    switch(action.type){
        case ADMIN_PRODUCTS_REQUEST:
            return {...state,adminLoading:true,adminError:null}
        case ADMIN_PRODUCTS_SUCCESS:
            return {...state,adminLoading:false,adminError:null,adminProducts:action.payload}
        case ADMIN_PRODUCTS_FAILURE:
            return {...state,adminLoading:false,adminError:action.payload}
        case ADMIN_PRODUCT_MUTATION_REQUEST:
            return {...state,adminMutating:true,adminError:null}
        case ADMIN_PRODUCT_MUTATION_SUCCESS:
            return {...state,adminMutating:false,adminError:null}
        case ADMIN_PRODUCT_MUTATION_FAILURE:
            return {...state,adminMutating:false,adminError:action.payload}
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return {...state,loading:true,error:null}

        case FIND_PRODUCTS_SUCCESS:
            return {...state,loading:false,error:null,products:action.payload}
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state,loading:false,error:null,product:action.payload}
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE: 
            return {...state,loading:false,error:action.payload}
        default:
            return state;
    }

}

