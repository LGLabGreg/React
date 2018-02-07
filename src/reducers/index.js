import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Expense action generator
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  }
) =>  ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const editExpense = (id,updates) =>  ({
  type: 'EDIT_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) =>  ({
  type: 'REMOVE_EXPENSE',
  id
});

// Expenses reducer
const expansesReducerDefaultState = [];
const expensesReducer = (state = expansesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id = action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
        else {
          return expense;
        }
      })
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

// Filters action generator
const setTextFilter = (text = '') =>  ({
  type: 'SET_TEXT_FILTER',
  text
});

// Filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expanses: expansesReducer,
    filters: filtersReducer
  })
);

const demoState = {
  expenses: [{
    id: 'jhkjsdhak9839',
    description: 'Rent',
    note: 'Lorem ipsum',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date',
    startDate: null,
    endDate: null
  }
};

