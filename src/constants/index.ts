interface ITransactionData {
  date: Date;
  amount: number;
  recipient: string;
}
interface ITransactionsHistoricalData {
  [id: string]: ITransactionData;
}
interface ISiteData {
  publicAddress: string;
  accountBalance: number;
  ethPrice: number;
  pastTransactions: ITransactionsHistoricalData;
}

const SiteData: ISiteData = {
  publicAddress: '0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0',
  accountBalance: 3.405,
  ethPrice: 1700,
  pastTransactions: {
    0: {
      date: new Date(2020, 3, 14, 19, 0, 0, 0),
      amount: 3,
      recipient: '0xb19181c403D451A1e161b305eb08DfD422ffd6DD',
    },
    1: {
      date: new Date(2020, 3, 14, 20, 0, 0, 0),
      amount: 2,
      recipient: '0xb19181c403D451A1e161b305eb08DfD422ffd6DD',
    },
    2: {
      date: new Date(2020, 3, 14, 21, 0, 0, 0),
      amount: 3,
      recipient: '0xb19181c403D451A1e161b305eb08DfD422ffd6DD',
    },
  },
};

export default SiteData;
