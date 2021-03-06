import * as actionTypes from '../action-types/auth';

const tokenLS = localStorage.getItem('token');
const uidLS = localStorage.getItem('uid');

const initialState = {
  isLogedIn: Boolean(tokenLS),
  isShowAlert: false,
  token: tokenLS || '',
  message: '',
  user: null,
  status: false,
  id: uidLS || '',
  currentStepRegistration: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLogedIn: true,
        token: action.payload.token,
        id: action.payload.uid,
      };
    case actionTypes.AUTH_LOGIN_ERROR:
      return { ...state, status: false, isShowAlert: true };
    case actionTypes.AUTH_REGISTRATION_SUCCESS:
      return {
        ...state, status: true, isShowAlert: true, currentStepRegistration: 1,
      };
    case actionTypes.AUTH_REGISTRATION_ERROR:
      return { ...state, status: false, isShowAlert: true };
    case actionTypes.AUTH_RESET_PASSWORD_SUCCESS:
      return { ...state, status: true, isShowAlert: true };
    case actionTypes.AUTH_RESET_PASSWORD_ERROR:
      return { ...state, status: false, isShowAlert: true };
    case actionTypes.AUTH_FORGOT_PASSWORD_SUCCESS:
      return { ...state, status: true, isShowAlert: true };
    case actionTypes.AUTH_FORGOT_PASSWORD_ERROR:
      return { ...state, status: false, isShowAlert: true };
    case actionTypes.AUTH_CONFIRM_EMAIL_SUCCESS:
      return { ...state, status: true, isShowAlert: true };
    case actionTypes.AUTH_CONFIRM_EMAIL_ERROR:
      return { ...state, status: false, isShowAlert: true };
    case actionTypes.AUTH_LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('uid');
      return {
        ...state, token: '', isShowAlert: false, isLogedIn: false, user: null,
      };
    case actionTypes.AUTH_CHANGE_STEP_REGISTRATION:
      return { ...state, currentStepRegistration: action.payload };
    case actionTypes.AUTH_GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    case actionTypes.AUTH_CHANGE_INFO_SUCCESS: {
      const curUser = { ...state.user };
      Object.keys(action.payload).forEach((key) => {
        let item = action.payload[key];
        if (key === 'additional_roles') {
          item = item.join(' ');
        }
        curUser[key] = item;
      });
      return {
        ...state,
        status: true,
        isShowAlert: true,
        user: curUser,
      };
    }
    case actionTypes.AUTH_CHANGE_INFO_ERROR:
      return { ...state, status: false, isShowAlert: true };
    default:
      return state;
  }
};
