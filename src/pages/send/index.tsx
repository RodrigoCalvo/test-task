import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import useTransaction from '../../utils/useTransaction';

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

const Send = () => {
  const classes = useStyles();
  const history = useHistory();
  const { sendTransaction } = useTransaction();
  const handleBack = () => {
    history.goBack();
  };
  const fields = {
    values: {
      address: '',
      amount: '',
    },
  };
  const handleFieldChange = (field: string, value: string) => {
    const newFields: any = { ...fields };

    newFields.values[field] = value;
  };

  const handleNext = () => {
    const { values } = fields;

    if (values.address !== '' && Number(values.amount) > 0) {
      sendTransaction(values.address, Number(values.amount));

      history.push('/success');
    }
  };

  return (
    <div className={classes.root}>
      <section className={classes.header}>
        <Typography variant="h5" component="h2" style={{ display: 'inline' }}>
          Send ether
        </Typography>
        <IconButton
          onClick={handleBack}
          style={{ paddingTop: '5px', float: 'right', display: 'inline' }}
        >
          <CloseIcon />
        </IconButton>
      </section>
      <section className={classes.highlight}>
        <Grid container style={{ padding: '0 10px 25px' }}>
          <TextField
            required={true}
            placeholder="Enter Public Address"
            label="Add Recipient"
            fullWidth
            className={classes.input}
            name="address"
            onChange={(event) => handleFieldChange('address', event.target.value)}
          />
          <TextField
            required={true}
            placeholder="Enter ETH Value"
            label="Add Amount"
            fullWidth
            name="amount"
            onChange={(event) => handleFieldChange('amount', event.target.value)}
          />
        </Grid>
      </section>
      <Grid container style={{ padding: '10px', marginTop: '25px' }}>
        <Grid item xs={12} sm={6} style={{ display: 'flex', float: 'left' }}>
          <Button onClick={handleBack} className={classes.button} variant="contained">
            Cancel
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} style={{ float: 'right' }}>
          <Button
            type="submit"
            className={classes.button}
            style={{ float: 'right' }}
            color="primary"
            variant="contained"
            onClick={handleNext}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Send;
