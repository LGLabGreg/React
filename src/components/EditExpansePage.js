import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpansePage = (props) => (
  
  <div>
    <h1>Edit expense {props.match.params.id}</h1>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.startEditExpense(props.match.params.id, expense);
        props.history.push('/');
      }}/>
    <button
      onClick={() => {
        props.startRemoveExpense({ id: props.match.params.id });
        props.history.push('/');
      }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
  startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpansePage);