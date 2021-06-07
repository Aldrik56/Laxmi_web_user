  
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from './types';

// api dummy
import axios from '../../helpers/axiosConfig'

export const fetcAction = (url,params) => {
    const {page,search,limit,filter,category} = params

    const urlParams = `page=${page}&per_page=${limit}`
    const urlParamsFilter = `${search ? `&search=${search}` : ''}${filter ? `&filter=${filter}` : ''}${category ? `&category=${category}` : ''}`
    return (dispatch) => {
      dispatch(fetchActionRequest())
      axios
        .get(`${url}?${urlParams}${urlParamsFilter}`)
        .then(response => {
          const {status,message,data} = response.data
          if(status) {
            dispatch(fetchActionSuccess(response.data))
          }else{
            dispatch(fetchActionFailure(message))
          }          
        })
        .catch(error => {
          dispatch(fetchActionFailure(error.message))
        })
    }
}

export const fetchActionRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}
export const fetchActionSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}

export const fetchActionFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}