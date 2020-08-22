import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages//homepage/HomePage';
import SignUp from './pages/login/SignUp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/homepage' component={HomePage}></Route>
          <Route path='/' component={SignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
