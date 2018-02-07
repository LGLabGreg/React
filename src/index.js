import React from 'react';
import { render } from 'react-dom';
import AppRouter from './routers/AppRouter';
import './style.css';

render(<AppRouter />, document.querySelector('.root'));
