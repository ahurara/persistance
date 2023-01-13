import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/Homepage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  ,document.getElementById('root')
)
