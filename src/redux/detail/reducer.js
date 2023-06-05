import { PRODUCT_DETAIL_ERROR, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "./type"

const initialState = {
    loading: false,
    product: {},
    error: ""
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_DETAIL_SUCCESS: 
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case PRODUCT_DETAIL_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
        
    }
}

export default detailReducer