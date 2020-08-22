import React from 'react';
import EmailBody from '../../components/email-body/EmailBody';
import { useStyles } from './homepage.styles';

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <EmailBody />
    </div>
  );
};

export default HomePage;
