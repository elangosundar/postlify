import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './types';

import api from "../services/api";

export const fetchProductsPending = () => ({
    type: FETCH_PRODUCTS_PENDING
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchProductsError = (error) => ({
    type: FETCH_PRODUCTS_ERROR,
    error: error
});

export const fetchProducts = () => async (dispatch) => {
    try {
        const res = await api.get('/get');
        dispatch(fetchProductsSuccess(res));
    } catch (err) {
        dispatch(fetchProductsError(err));
    }
};
