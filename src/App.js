import React from 'react';
import './App.css';
import GrandParent from './GrandParent';
import Parent from './Parent';
import Child from './Child';

function App() {
  return (
    <div className="mainDiv">
    
      <h1 className="mainTitle">React Class5 Assignment - useReducer reducer</h1>

      <div className="grandParent">
        <GrandParent />
      </div>
    
      <div className="parent">
        <Parent />
      </div>

      <div className="child">
        <Child />
      </div>
    
    </div>
  );
}

export default App;
