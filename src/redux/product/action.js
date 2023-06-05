import axios from 'axios'
import { PRODUCT_LIST_ERROR, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from './types'

const fetchProducts = () => async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_ERROR,
            payload: error.message
        })
    }
}

export default fetchProducts