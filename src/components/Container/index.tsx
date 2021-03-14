import { makeStyles } from '@material-ui/core';
import { FC, ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
}

const useStyles = makeStyles({
  layout: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2%',
    background: 'rgb(44, 47, 54)',
  },
  container: {
    width: '100%',
    maxWidth: '900px',
    boxSizing: 'border-box',
    transition: 'all 0.2s',
  },
});

const Layout: FC<IContainer> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default Layout;
