import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/main/Content/Content.jsx';
import LeftSide from './components/main/LeftSide/LeftSide.jsx';
import RigthSide from './components/main/RightSide/RightSide.jsx';
import Header_Container from './components/main/Header/Header_Container.jsx';
import Left_Side_Container from './components/main/LeftSide/Left_Side_Container.jsx';


const CN = (props) => {
  return (
    <BrowserRouter>
      <div className="CN_wrapper">
        <Header_Container />
        <Content store={props.store} />
        <Left_Side_Container />
        <RigthSide />
      </div>
    </BrowserRouter>
  );
}

export default CN;
