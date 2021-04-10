import React from 'react';
import './StartingCoin.css';
import Coin from "../Coin/Coin";
import {CoinValueEnum} from "../../enum/CoinValueEnum";
import {Col, Row, Card} from "react-bootstrap";

function StartingCoin() {
  return (
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
  );
}

export default StartingCoin;
