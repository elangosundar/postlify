import {
    FETCH_PRODUCTS_PENDING, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_ERROR
    } from '../actions/types';

const initialState = {
    pending: false,
    products: [],
    error: null
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => {
    return state.productReducers.products
};
export const getProductsPending = state => state.productReducers.pending;
export const getProductsError = state => state.productReducers.error;
