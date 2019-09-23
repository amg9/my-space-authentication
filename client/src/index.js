import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { AuthProvider, } from './providers/AuthProvider';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>, 
  document.getElementById('root')
);
