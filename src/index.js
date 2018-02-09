import React from 'react';
import { render } from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import './style.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill'}))
store.dispatch(addExpense({ description: 'Gas bill'}))
store.dispatch(setTextFilter('Gas'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log('visibleExpenses', visibleExpenses)

render(<AppRouter />, document.querySelector('.root'));
