import React from 'react';
import ReactDOM from 'react-dom';
import CN from './CN.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/reset.css';
import './css/index.css';
import store from './redux/reduxStore.js';
import StoreContext from './StoreContext.js';


export const rerenderEntireThree = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <CN/>
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}; 

rerenderEntireThree(store.getState());
store.subscribe(()=>{
  let state = store.getState()
  rerenderEntireThree(state)
});

