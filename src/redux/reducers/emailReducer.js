import * as actionTypes from '../../constants/actionTypes';
import INITIAL_STATE from '../initialState';

const emailReducer = (state = INITIAL_STATE.email, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        emails: action.payload,
      };
    case actionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
