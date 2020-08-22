import React, { useState } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createUser } from '../../redux/actions/userAction';

import { useStyles } from './sign-up.styles';

export const SignUp = (props) => {
  const classes = useStyles();
  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
  });

  const handleSubmit = () => {
    console.log('usercredentials', userCredentials);
    const { createUser } = props;
    createUser(userCredentials);
    alert('User created successfully');
    props.history.push('/homepage');
  };

  const handleChange = (event) => {
    console.log('event:', event.target);
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
    console.log('userCredentials', userCredentials);
  };
  const { firstName, lastName, email, password, mobile } = userCredentials;

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                value={firstName}
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                value={lastName}
                autoComplete='lname'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                value={email}
                autoComplete='email'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                value={password}
                autoComplete='current-password'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='mobile'
                label='Mobile No'
                type='number'
                id='mobile'
                value={mobile}
                autoComplete='current-password'
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='/homepage' variant='body2'>
                Already have an account?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default connect(null, { createUser })(SignUp);
