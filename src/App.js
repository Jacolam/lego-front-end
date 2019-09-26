import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LogInPage from './Pages/LogInPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={LogInPage}/>
      </Switch>
    </div>
  );
}

export default App;
