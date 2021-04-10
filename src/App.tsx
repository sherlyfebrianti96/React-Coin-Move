import React from 'react';
import './App.css';
import Coin from "./components/Coin/Coin";
import {CoinValueEnum} from "./enum/CoinValueEnum";
import CoinArea from "./components/CoinArea/CoinArea";
import {Col, Container, Row, FormControl, Card} from "react-bootstrap";

function App() {
  return (
    <Container className="App">
      <Card className="Configuration-Section">
        <Card.Header>
          <h4>Configurations</h4>
        </Card.Header>
        <Card.Body>
          <Row>
            {/* Starting Coin Configuration */}
            <Col>
              <Row>
                <Col>
                  <h6>Configure your Starting Coin</h6>
                  <p className="small">Click on the coin to add your Starting Coin</p>
                </Col>
              </Row>
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <Coin value={CoinValueEnum.OneCent}/>
                    </Col>
                    <Col>
                      <Coin value={CoinValueEnum.FiveCent}/>
                    </Col>
                    <Col>
                      <Coin value={CoinValueEnum.TwentyCent}/>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            {/* Needed Coin Configuration */}
            <Col>
              <Row>
                <Col>
                  <h6>Configure your Needed Coin</h6>
                  <p className="small">Input how much coin you need.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormControl size="lg" type="number" name="neededCoin">
                  </FormControl>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
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
