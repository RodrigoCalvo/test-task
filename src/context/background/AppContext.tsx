import { createContext } from 'react';
import { Transaction } from '../../services/TransactionsService';
import { getInitialTransactions } from '../../utils';
import { IAppState } from './AppState';
import Constants from './../../constants';

type ContextType = {
  state: IAppState;
  addTransaction: (transaction: Transaction) => void;
  setState: (state: IAppState) => void;
};
export const initAppState: IAppState = {
  transactions: getInitialTransactions(),
  publicAddress: Constants.publicAddress,
  accountBalance: Constants.accountBalance,
  ethPrice: Constants.ethPrice,
};
const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {},
});

export default AppContext;
