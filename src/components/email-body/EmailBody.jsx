import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import EmailBodyHeader from '..//email-body-header/EmailBodyHeader';
import { useStyles } from './email-body-styles';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const EmailBody = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        className={classes.tabs}
      >
        <Tab label='Inbox' {...a11yProps(1)} />
        <Tab label='Starred' {...a11yProps(2)} />
        <Tab label='Important' {...a11yProps(3)} />
        <Tab label='Sent mail' {...a11yProps(4)} />
        <Tab label='Drafts' {...a11yProps(5)} />
        <Tab label='Spam' {...a11yProps(6)} />
        <Tab label='Bin' {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <EmailBodyHeader />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EmailBodyHeader />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EmailBodyHeader />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EmailBodyHeader />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <EmailBodyHeader />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <EmailBodyHeader />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <EmailBodyHeader />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <EmailBodyHeader />
      </TabPanel>
    </div>
  );
};

export default EmailBody;
