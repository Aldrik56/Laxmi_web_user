import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ENTER_PAGE,
    LOGOUT
} from './types';

const initialState = {
    isLogin: false,
    isLoading : false,
    dataUser: null,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
              ...state,
              isLoading: true
            }        
        case LOGIN_SUCCESS :
            return {
                isLoading : false,
                isLogin : true,
                dataUser: action.payload,
                error: '',
            }
        case LOGIN_FAILURE :
            return {
                ...state,
                isLoading : false,
                error: action.payload,
            }    
        case LOGOUT :
            return {
                isLogin: false,
                isLoading : false,
                dataUser: null,
                error: ''
            }    
        case ENTER_PAGE :
            return {
                isLogin: false,
                isLoading : false,
                dataUser: null,
                error: ''
            }                    
        default : return state              
    }
}

export default reducer ;