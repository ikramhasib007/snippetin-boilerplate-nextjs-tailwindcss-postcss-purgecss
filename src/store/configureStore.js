import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { reduxDevTools } from '../config';
import errorReducer from '../reducers/errorReducer';
import loadingReducer from '../reducers/loadingReducer';
import userReducer from '../reducers/userReducer';

const composeEnhancers = reduxDevTools || compose;

export default (initialState, options) => {
  return createStore(combineReducers({
      user: userReducer,
      error: errorReducer,
      loading: loadingReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )
}