import { useHistory } from 'react-router-dom';
import { ReactComponent as SuccessIcon } from '../../assets/svgs/success.svg';
import { Button, Typography, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    padding: '20px',
  },
  header: {
    width: '100%',
    boxSizing: 'border-box',
    background: 'white',
    //display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '10px',
  },
  highlight: {
    background: '#e7f1fb',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    marginTop: '10px',
  },
  content: {
    padding: '20px 20px',
    boxSizing: 'border-box',
    height: 'calc(100% - 150px)',
  },
  input: {
    marginBottom: '20px',
  },
  actions: {
    width: '100%',
    borderTop: '1px solid $color-border',
    padding: '20px 20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    maxWidth: '200px',
  },
});
const Success = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Blank | Sucess`}</title>
      </Helmet>
      <section className={classes.highlight}>
        <SuccessIcon width="80px" />
        <Typography variant="h3">Success </Typography>
        <Typography variant="h4" style={{ textAlign: 'center', margin: '10px 0 25px' }}>
          You've successfully sent your funds
        </Typography>

        <Button href="https://etherscan.io/" target="blank">
          View on Etherscan
        </Button>
      </section>
      <section className={classes.actions} style={{ marginTop: '15px' }}>
        <Button onClick={handleBack} className={classes.button} color="primary" variant="contained">
          Done
        </Button>
      </section>
    </div>
  );
};

export default Success;
