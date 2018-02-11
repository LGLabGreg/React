import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { startSetExpenses } from '../actions/expenses';

class ExpenseList extends React.Component {

  componentDidMount() {
    this.props.startSetExpenses();
  }

  render () {
    return (
      <div>
        <h1>Expense list</h1>
        {
          this.props.expenses.length ?
            <ul>
              {this.props.expenses.map((expense) => (
                <ExpenseListItem key={expense.id} {...expense} />
              ))}
            </ul>
            : 'No Expenses'
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

const mapDispatchToProps = (dispatch) => ({
  startSetExpenses: () => dispatch(startSetExpenses())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);