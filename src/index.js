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
         <SocNet store={store} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

for(let i = 0; i<=100; i++){
  let num = i % 3;
  if(num === 0 & i!= 0){
    console.log('fizz')
  } else{
    console.log(i)
  }
};




