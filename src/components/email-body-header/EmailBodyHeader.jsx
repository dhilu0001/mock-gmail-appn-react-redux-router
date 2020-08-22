import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useStyles } from './email-body-header-styles';
import { EmailBodyTab, a11yProps } from './EmailBodyTab';
import EmailContent from '../email-content/EmailContent';

const EmailBodyHeader = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='action tabs example'
        >
          <Tab label='Primary' {...a11yProps(0)} />
          <Tab label='Social' {...a11yProps(1)} />
          <Tab label='Notifications' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <EmailBodyTab value={value} index={0} dir={theme.direction}>
        <EmailContent />
      </EmailBodyTab>
      <EmailBodyTab value={value} index={1} dir={theme.direction}>
        <EmailContent />
      </EmailBodyTab>
      <EmailBodyTab value={value} index={2} dir={theme.direction}>
        <EmailContent />
      </EmailBodyTab>
    </div>
  );
};

export default EmailBodyHeader;
