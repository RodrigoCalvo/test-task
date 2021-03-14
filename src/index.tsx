import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fontsource-roboto';
import { TransactionsService } from './services/TransactionsService';
import { getInitialTransactions } from './utils/index';

export const transactionService: TransactionsService = new TransactionsService({
  transactions: getInitialTransactions(),
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
