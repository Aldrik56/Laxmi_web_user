import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from './types';

const initialState = {
    isLoading: false,
    data : null,
    error : ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                data : null,
                isLoading: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error : action.payload
            } 
        
        default: return state
    }
  }
  
  export default reducer
