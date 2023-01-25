import {createStore ,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productReducer } from "./reducers/productReducer";
import {categoryReducer} from "./reducers/categoryReducer"
import { userReducer} from "./reducers/userReducer"
import {profileReducer} from "./reducers/userReducer"
import {forgotPasswordReducer} from "./reducers/userReducer"
import {cartReducer} from "./reducers/cartReducer"

const reducer = combineReducers({
    products:productReducer,
    categorys:categoryReducer,
    user : userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart:cartReducer
});

let initialState={
    cart:{
        cart:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
    },
}

const middleware=[thunk]

const store = createStore( reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store