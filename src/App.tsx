import React from 'react';
import './App.css';
import CoinArea from "./components/CoinArea/CoinArea";
import {Col, Container, Row} from "react-bootstrap";
import CoinConfiguration from "./components/CoinConfiguration/CoinConfiguration";

function App() {
  return (
    <Container className="App">
      <CoinConfiguration />
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
