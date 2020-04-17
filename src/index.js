import React from 'react';
import ReactDOM from 'react-dom';
import SocNet from './SocNet.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/reset.css';
import './css/index.css';
import store from './redux/redux-store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SocNet store={store} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
