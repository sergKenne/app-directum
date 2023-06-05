import axios from "axios";
import { PRODUCT_DETAIL_ERROR, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "./type";


const fetchDetailProduct = (id) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_ERROR,
            payload: error.message
        })
    }
}

export default fetchDetailProduct