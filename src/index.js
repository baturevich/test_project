import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/reset.css';
import './css/index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.render(
    <Provider store={store}>
      <HashRouter >
         <App />
      </HashRouter>
    </Provider>,
  document.getElementById('root')
);




