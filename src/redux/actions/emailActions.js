import * as actionTypes from '../../constants/actionTypes';
import mockRequest from '../../utils/mockData';

const fetchEmailsStart = () => ({
  type: actionTypes.FETCH_USERS_START,
});

const fetchEmailsSuccess = ({ response }) => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: response.data[0].data,
});

const fetchEmailsFailure = ({ error }) => ({
  type: actionTypes.FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchEmails = () => async (dispatch) => {
  dispatch(fetchEmailsStart());
  try {
    const response = await mockRequest.get('getEmails');
    dispatch(fetchEmailsSuccess({ response }));
  } catch (error) {
    dispatch(fetchEmailsFailure({ error }));
  }
};
