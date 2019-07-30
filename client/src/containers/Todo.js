import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addTodo, fetchTodos } from "../actions";



import requireAuth from './../hoc/requireAuth';

class Todo extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  onSubmit = formValues => {
    this.props.addTodo(formValues);
  }

  renderTodos() {
    return this.props.todos.map(todo => {
      return (
        <div key={todo._id}>
          <p>{todo._id}</p>
          <p>{todo.description}</p>
          <p>{todo.completed.toString()}</p>
        </div>
      );
    })
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.todos);
    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <label>Todo Description</label>
          <Field
            name='description'
            type='text'
            component='input'
            autoComplete='none'
          />
          <button>Add todo</button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

function mapStateToProps({ todo }) {
  return { todos: todo.todos };
}

const formedComponent = compose(
  connect(mapStateToProps, { addTodo, fetchTodos }),
  reduxForm({ form: 'Add todo'})
)(Todo);

export default requireAuth(formedComponent);