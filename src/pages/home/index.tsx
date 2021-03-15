import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as Avatar } from '../../assets/svgs/account.svg';
import { ReactComponent as ETHIcon } from '../../assets/svgs/eth.svg';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';
import Constants from '../../constants';
import { formatAddress, formatCurrency, formateDate } from '../../utils/index';
import { Grid, makeStyles } from '@material-ui/core';
import { Transaction } from '../../services/TransactionsService';
import useTransaction from '../../utils/useTransaction';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles({
  root: {
    height: '100%',
    padding: '20px',
  },
  header: {
    width: '100%',
    boxSizing: 'border-box',
    background: 'white',
    paddingBottom: '20px',
    //display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '10px',
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 500,
  },
  avatar: {
    marginRight: '12px',
  },
  highlight: {
    background: '#e7f1fb',
    borderRadius: '10px',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    marginTop: '10px',
  },
  send: {
    marginTop: '20px',
    background: '#1673ff',
    color: 'white',
  },
  transactions: {
    background: '#e7f1fb',
    borderRadius: '10px',
    minHeight: '200px',
    padding: '20px 0',
    marginTop: '10px',
  },
  transactionsSvg: {
    width: '30px',
    marginRight: '20px',
  },
});

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const { state } = useTransaction();

  const handleSend = () => {
    history.push('/send');
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Blank`}</title>
      </Helmet>
      <section className={classes.header}>
        <div className={classes.avatarContainer}>
          <Avatar className={classes.avatar} />
          <Typography variant="h6" component="h2">
            Account 1
          </Typography>
        </div>
        <Typography variant="subtitle1" component="h3" color="textSecondary">
          {formatAddress(Constants.publicAddress)}
        </Typography>
      </section>
      <section className={classes.highlight}>
        <Typography variant="h4" component="h4">
          {state.accountBalance} ETH
        </Typography>
        <Typography variant="body1" component="h5" color="textSecondary">
          {`${formatCurrency(state.accountBalance * Constants.ethPrice)} USD`}
        </Typography>
        <IconButton className={classes.send} onClick={handleSend}>
          <ArrowUpwardIcon />
        </IconButton>
        <span>Send</span>
      </section>
      <section className={classes.transactions}>
        {state.transactions.map((tx: Transaction) => (
          <Grid container key={tx.id} style={{ padding: '10px' }}>
            <Grid item xs={12}>
              <Grid item xs={12} sm={6} style={{ display: 'flex', float: 'left' }}>
                <ETHIcon className={classes.transactionsSvg} />
                <Typography variant="h6">
                  {`${tx.from === state.publicAddress ? 'Send' : 'Receive'} Ether`}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} style={{ float: 'right' }}>
                <Typography variant="h6" align="right">
                  {tx.value} ETH
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12} sm={6} style={{ float: 'left' }}>
                <Typography variant="subtitle1" color="textSecondary">
                  {formateDate(tx.when)}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} style={{ float: 'right' }}>
                <Typography variant="subtitle1" color="textSecondary" align="right">
                  {`-${formatCurrency(tx.value * state.ethPrice)}USD`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </section>
    </div>
  );
};

export default Home;
