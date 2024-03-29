import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './Reducers/appReducer'

const store = createStore(appReducer)

ReactDOM.render(
  <Provider store ={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
