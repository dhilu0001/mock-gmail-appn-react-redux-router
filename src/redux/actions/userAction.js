import * as actionTypes from '../../constants/actionTypes';
import mockRequest from '../../utils/mockData';

const createUserStart = () => ({
  type: actionTypes.CREATE_USER_START,
});

const createUserSuccess = ({ response }) => ({
  type: actionTypes.CREATE_USER_SUCCESS,
  payload: response,
});

const createUserFailure = ({ error }) => ({
  type: actionTypes.CREATE_USER_FAILURE,
  payload: error,
});

export const createUser = (response) => async (dispatch) => {
  dispatch(createUserStart());
  try {
    console.log('response:', response);
    // const response = await mockRequest.post('getEmails');
    dispatch(createUserSuccess({ response }));
  } catch (error) {
    dispatch(createUserFailure({ error }));
  }
};
