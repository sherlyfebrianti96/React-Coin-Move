import React from 'react';
import './App.css';
import Coin from "./components/Coin/Coin";
import {CoinValueEnum} from "./enum/CoinValueEnum";

function App() {
  return (
    <div className="App">
      <Coin value={CoinValueEnum.OneCent} />
      <Coin value={CoinValueEnum.FiveCent} />
      <Coin value={CoinValueEnum.TwentyCent} />
    </div>
  );
}

export default App;
