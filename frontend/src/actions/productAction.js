import axios from "axios"

import{
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAR_ERRORs
} from "../constants/productConstants"

export const getProduct = (keyword='', currentpage=1) => async (dispatch) => {
    try {
        dispatch({
            type:ALL_PRODUCT_REQUEST
        })
        // console.log('*************',keyword);
        const link = `/api/v1/products?keyword=${keyword}&page=${currentpage}`
        const {data} = await axios.get(link)
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })

    } catch (error) {
        // console.log('errorgsdsdb***',error);
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.message
        });
    }
};


export const clearError = ()=> async (dispatch) =>{
    dispatch({
        type:CLEAR_ERRORs
    })
}