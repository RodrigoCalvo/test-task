import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as SuccessIcon } from '../../assets/svgs/success.svg';
import { Button, Link, Typography, makeStyles } from '@material-ui/core';

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
      <section className={classes.highlight}>
        <SuccessIcon width="80px" />
        <Typography variant="h3">Success </Typography>
        <Typography variant="h4">You've successfully sent your friends </Typography>

        <Button href="https://etherscan.io/" target="blank">
          Viwe on Etherscan
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
