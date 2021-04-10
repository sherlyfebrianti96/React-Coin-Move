import React from 'react';
import './App.css';
import Coin from "./components/Coin/Coin";
import {CoinValueEnum} from "./enum/CoinValueEnum";
import CoinArea from "./components/CoinArea/CoinArea";
import {Col, Container, Row} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Coin value={CoinValueEnum.OneCent}/>
          <Coin value={CoinValueEnum.FiveCent}/>
          <Coin value={CoinValueEnum.TwentyCent}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <CoinArea name="starting-coin" title="Starting Coin"/>
        </Col>
        <Col>
          <CoinArea name="needed-coin" title="Needed Coin"/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
