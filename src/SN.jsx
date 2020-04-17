import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/main/Header/Header.jsx';
import Content from './components/main/Content/Content.jsx';
import LeftSide from './components/main/LeftSide/LeftSide.jsx';
import RigthSide from './components/main/RightSide/RightSide.jsx';
import StoreContext from './StoreContext.js';


const CN = (props) => {
  return (
    <BrowserRouter>
      <div className="CN_wrapper">
        <StoreContext.Consumer>
          {(store) => {
            return <Header state={store.getState()} />
            
            }
          }
        </StoreContext.Consumer>
          <Content />
        <LeftSide />
        <RigthSide />
      </div>
    </BrowserRouter>
  );
}

export default CN;
