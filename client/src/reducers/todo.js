import {ADD_TODO, TODO_ERROR, FETCH_TODOS } from "../actions/types";

const INITIAL_STATE = {
  todos: [],
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TODO:
      return {...state, todos: action.payload };
    case TODO_ERROR:
      return {...state, errorMessage: action.payload };
    case FETCH_TODOS:
      return {...state, todos: action.payload };
    default:
      return state;
  }
}