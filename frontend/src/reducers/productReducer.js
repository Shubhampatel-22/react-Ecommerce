
import{
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAR_ERRORs
} from "../constants/productConstants"






export const productReducer = (state={products:[]}, action)=>{
    // console.log('sjsdjs', action)
    switch (action.type) {
        case ALL_PRODUCT_REQUEST :
            return{
                loading:true,
                products:[]
            }
        case ALL_PRODUCT_SUCCESS :
            return{
                loading:false,
                products:action.payload.products,
                productsCount:action.payload.productsCount,
                resultPerPage:action.payload.resultPerPage
            }
        case ALL_PRODUCT_FAIL :
            // console.log('reducer****', action)
            return{
                loading:false,
                error:action.payload
            }
        case CLEAR_ERRORs :
            return{
                ...state,
                error:null
            }
    
        default:
            return state
    }
 };