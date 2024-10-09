import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ENTER_PAGE,
  LOGOUT
} from './types';

// axios
import axios from '../../helpers/axiosConfig';


export const loginAction = (form, router) => {
  debugger
  return (dispatch) => {
    dispatch(loginActionRequest())
    axios
      .post('/auth/login', form)
      .then(response => {
        console.log(response);
        const { status, message } = response.data;
        if (status) {
          dispatch(loginSuccess(response.data.data))
          router.push('/')
        } else {
          dispatch(loginFailure(message))
        }
      })
      .catch(error => {
        dispatch(loginFailure(error.message))
      })
  }
}

export const loginActionRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = dataUser => {
  return {
    type: LOGIN_SUCCESS,
    payload: dataUser
  }
}
export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}
export const logout = () => {
  return {
    type: LOGOUT
  }
}
// ENTER LOGIN PAGE
export const enterPage = () => {
  return {
    type: ENTER_PAGE
  }
}

export const registerAction = (form) => {
  return axios.post(`/api/auth/signup`, form)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return {
        status: false,
        message: error.message
      }
    })
}

export const forgotAction1 = form => {
  return axios.post(`/api/auth/forgot_p1`, form)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return {
        status: false,
        message: error.message
      }
    })
}

export const forgotAction2 = form => {
  return axios.post(`/api/auth/forgot_p2`, form)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return {
        status: false,
        message: error.message
      }
    })
}

export const forgotAction3 = form => {
  return axios.post(`/api/auth/forgot_p3`, form)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return {
        status: false,
        message: error.message
      }
    })
}