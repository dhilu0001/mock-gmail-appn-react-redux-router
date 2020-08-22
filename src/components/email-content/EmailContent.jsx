import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEmails } from '../../redux/actions/emailActions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useStyles } from './email-content-styles';

const EmailContent = (props) => {
  const { email } = props;
  const { emails } = email;
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  let [selectedIndex, setIndex] = useState(0);
  let [message, setMessage] = useState('');

  useEffect(() => {
    const { fetchEmails } = props;
    fetchEmails();
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = (event) => {
    console.log('event', event.target);
    setIndex(event.target.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log('user', localStorage.getItem('userList'));

  return (
    <List className={classes.root}>
      {emails.map((email, index) => (
        <ListItem key={email.id} alignItems='flex-start'>
          <ListItemText
            secondary={
              <React.Fragment>
                <Checkbox
                  id={index}
                  value={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <IconButton aria-label='view' className={classes.margin}>
                  <VisibilityIcon
                    fontSize='small'
                    onClick={handleClickOpen}
                    id={index}
                  />
                </IconButton>
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textPrimary'
                >
                  {email.person}
                </Typography>
                <span> {email.primary}</span>
              </React.Fragment>
            }
          />
          <Dialog
            open={open}
            onClose={handleClose}
            id={index}
            aria-labelledby='form-dialog-title'
            classes={{
              paper: classes.paper,
            }}
            maxWidth='xl'
          >
            <DialogTitle>{emails[selectedIndex].primary}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {emails[selectedIndex].secondary}
              </DialogContentText>
              <form>
                <TextField
                  id='message'
                  multiline
                  rows={8}
                  defaultValue=''
                  autoFocus
                  margin='dense'
                  label='Reply Message'
                  type='text'
                  value={message}
                  fullWidth
                  variant='outlined'
                  onChange={handleMessage}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Draft
              </Button>
              <Button onClick={handleClose} color='primary'>
                Send
              </Button>
            </DialogActions>
          </Dialog>
        </ListItem>
      ))}
      <Divider variant='inset' component='li' />
    </List>
  );
};

const mapStateToProps = ({ email }) => {
  return {
    email,
  };
};
export default connect(mapStateToProps, { fetchEmails })(EmailContent);
