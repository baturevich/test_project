import React from 'react';
import ReactDOM from 'react-dom';
import SocNet from './SocNet.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/reset.css';
import './css/index.css';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <SocNet />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




