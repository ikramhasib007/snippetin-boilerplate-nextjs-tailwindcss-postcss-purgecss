import fetch from 'isomorphic-unfetch';
import { options, BASE_URL } from '../../config';

export const postUser = () => ({
  type: 'POST_USER_REQUEST'
});

export const setPostUser = (payload) => ({
  type: 'POST_USER_SUCCESS',
  payload
});

export const failurePostUser = (payload) => ({
  type: 'POST_USER_FAILURE',
  payload
});

export const startSetPostUser = (user) => {
  return async (dispatch) => {
    options.method = 'POST';
    options.body = JSON.stringify(user);

    dispatch(postUser());
    const userRes = await fetch(`${BASE_URL}/users`, options)
      .catch(error => dispatch(failurePostUser(error)));
    if(userRes.status === 422) {
      dispatch(failurePostUser('Validation error'));
      return {error: 'Validation error'};
    }
    if(userRes.status === 406) {
      dispatch(failurePostUser('Duplicates error'));
      return {error: 'Duplicates error'};
    }
    if(userRes.status === 400) {
      dispatch(failurePostUser('Bad request'));
      return {error: 'Bad request'};
    }
    const res = await userRes.json();
    dispatch(setPostUser(res));
    return {user: res};
  }
}

