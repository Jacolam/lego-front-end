import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={LogInPage}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
