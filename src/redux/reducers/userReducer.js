import * as actionTypes from '../../constants/actionTypes';
import INITIAL_STATE from '../initialState';

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.CREATE_USER_SUCCESS:
      let existingUsers = JSON.parse(localStorage.getItem('userList')) || [];
      existingUsers.push(action.payload);
      localStorage.setItem('userList', JSON.stringify(existingUsers));
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      };
    case actionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
