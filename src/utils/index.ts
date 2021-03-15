import Constants from '../constants';
import { Transaction } from '../services/TransactionsService';

const LOCALE_INFO = 'en-US';
export function formatAddress(address: string, chars = 4): string {
  if (!address) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`;
}

export function formatCurrency(amount: number) {
  return amount.toLocaleString(LOCALE_INFO, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function getInitialTransactions() {
  return Object.keys(Constants.pastTransactions).map((key: string) => {
    return {
      id: Number(key),
      from: Constants.publicAddress,
      to: Constants.pastTransactions[key].recipient,
      value: Number(Constants.pastTransactions[key].amount),
      when: new Date(Constants.pastTransactions[key].date),
    } as Transaction;
  });
}

export function formateDate(date: Date) {
  // const d = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  // const t = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  // return d + ' ' + t;
  return date.toLocaleDateString(LOCALE_INFO) + ' ' + date.toLocaleTimeString(LOCALE_INFO);
}
