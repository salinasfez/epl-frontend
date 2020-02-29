import React from 'react';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home';
import AllMatches from './components/AllMatches';
import CurrentMatchDay from './components/CurrentMatchDay';
import MyAccount from './components/MyAccount';
import HowTo from './components/HowTo';
import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
        <nav className='nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/allmatches'>All Match Days</NavLink>
          <NavLink to='/currentmatchday'>Current Match Day</NavLink>
          <NavLink to='/myaccount'>All Users</NavLink>
          <NavLink to='/howto'>Profiles</NavLink>
        </nav>
        <Route exact path='/' component={Home}/>
        <Route exact path='/allmatches' component={AllMatches}/>
        <Route exact path='/currentmatchday' component={CurrentMatchDay}/>
        <Route exact path='/howto' component={HowTo}/>
        <Route exact path='/myaccount' component={MyAccount}/>
      </Router>
      
    )
  }
}
export default App;
