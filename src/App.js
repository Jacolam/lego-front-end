import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LogInPage from './Pages/LogInPage'
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={LogInPage}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
