import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import './style.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: '45.5'}))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1500}))
store.dispatch(addExpense({ description: 'Rent', amount: '1200'}))
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log('visibleExpenses', visibleExpenses)
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
render(app, document.querySelector('.root'));
