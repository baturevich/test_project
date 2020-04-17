import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/main/Header/Header.jsx';
import Content from './components/main/Content/Content.jsx';
import LeftSide from './components/main/LeftSide/LeftSide.jsx';
import RigthSide from './components/main/RightSide/RightSide.jsx';


const CN = (props) => {
  return (
    <BrowserRouter>
      <div className="CN_wrapper">
        <Header state={props.store.getState()} />
        <Content store={props.store} />
        <LeftSide />
        <RigthSide />
      </div>
    </BrowserRouter>
  );
}

export default CN;
