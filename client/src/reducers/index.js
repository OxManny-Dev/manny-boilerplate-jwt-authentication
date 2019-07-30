import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import counter from './counter';
import auth from './auth';
import todo from './todo';

export default combineReducers({
  auth,
  form,
  todo,
  counter
});