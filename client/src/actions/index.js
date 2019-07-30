import { INCREMENT_COUNTER, DECREMENT_COUNTER, AUTH_USER, AUTH_ERROR, ADD_TODO, TODO_ERROR, FETCH_TODOS } from "./types";
import axios from 'axios';


export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};


export const signup = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/signup', formProps);
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/signin', formProps);
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};


export const fetchTodos = () => async dispatch => {
  try {
    const response = await axios.get('/api/todo', {
      headers: { authorization: localStorage.getItem('token')}
    });

    dispatch({ type: FETCH_TODOS, payload: response.data.todos });
  } catch(e) {
    dispatch({ type: TODO_ERROR, payload: 'Something bad happened' });
  }
}

export const addTodo = formValue => async dispatch => {
  try {
    await axios.post('/api/todo', formValue, {
      headers: { authorization: localStorage.getItem('token') }
    });

    const todos = await axios.get('/api/todo', {
      headers: { authorization: localStorage.getItem('token')}
    });

    console.log("Testing");

    dispatch({ type: ADD_TODO, payload: todos.data.todos});
  } catch(e) {
    dispatch({ type: TODO_ERROR, payload: 'Something went wrong'});
  }
};








