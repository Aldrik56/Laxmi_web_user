
import axios from 'axios';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './types';

// import axios from '../../helpers/axiosConfig'

export const fetcAction = (url, params) => {
  let urlParamsFilter = ''

  Object.keys(params).map(function (key, index) {
    if (params[key]) {
      urlParamsFilter += `&${[key]}=${params[key]}`
    }
  })
  console.log(`${url}?${urlParamsFilter}`);
  console.log(`${params.category}`);
  return (dispatch) => {
    dispatch(fetchActionRequest())
    axios
      .get(`/api${url}?${urlParamsFilter}`)
      .then(response => {
        const { status, message, data } = response.data
        if (status) {
          dispatch(fetchActionSuccess(response.data))
        } else {
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