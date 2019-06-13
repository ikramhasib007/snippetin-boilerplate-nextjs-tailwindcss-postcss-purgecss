import fetch from 'isomorphic-unfetch';
import { options, BASE_URL } from '../../config';

export const postLogin = () => ({
  type: 'POST_LOGIN_REQUEST'
});

export const setPostLogin = (payload) => ({
  type: 'POST_LOGIN_SUCCESS',
  payload
});

export const failurePostLogin = (payload) => ({
  type: 'POST_LOGIN_FAILURE',
  payload
});

export const startSetPostLogin = (user) => {
  console.log('user: ', user);
  return async (dispatch) => {
    options.method = 'POST';
    options.body = JSON.stringify(user);
    console.log('options: ', options);

    dispatch(postLogin());
    const userRes = await fetch(`${BASE_URL}/login`, options)
    .catch(error => dispatch(failurePostLogin(error)));
    console.log('userRes: ', userRes);
    // if(userRes.status === 422) {
    //   dispatch(failurePostLogin('Validation error'));
    //   return {error: 'Validation error'};
    // }
    const res = await userRes.json();
    console.log('res: ', res);
    // dispatch(setPostLogin(res));
    return {user: res};
  }
}

