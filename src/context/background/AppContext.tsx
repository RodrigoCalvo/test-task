import { createContext } from 'react';
import { Transaction } from '../../services/TransactionsService';
import { IAppState } from './AppState';

type ContextType = {
  state: IAppState;
  addTransaction: (transaction: Transaction) => void;
  setState: (state: IAppState) => void;
};
export const initAppState: IAppState = {
  transactions: [],
};
const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {},
});

export default AppContext;
