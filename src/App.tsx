import React from 'react';
import './App.css';
import {Coin1} from "./components/Coin1";
import {Coin5} from "./components/Coin5";
import {Coin20} from "./components/Coin20";

function App() {
  return (
    <div className="App">
      <Coin1 />
      <Coin5 />
      <Coin20 />
    </div>
  );
}

export default App;
