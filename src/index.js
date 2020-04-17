import React from 'react';
import ReactDOM from 'react-dom';
import SocNet from './SocNet.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/reset.css';
import './css/index.css';
import store from './redux/redux-store.js';
import { Provider } from 'react-redux';



export const rerenderEntireThree = () =>{
  ReactDOM.render(
    <React.StrictMode>
        <SocNet store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}; 

rerenderEntireThree(store.getState());
store.subscribe(()=>{
  let state = store.getState()
  rerenderEntireThree(state)
});

