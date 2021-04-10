import React from 'react';
import './CoinConfiguration.css';
import {Row, Card} from "react-bootstrap";
import StartingCoin from "../StartingCoin/StartingCoin";
import NeededCoin from "../NeededCoin/NeededCoin";

function CoinConfiguration() {
  return (
    <Card className="Configuration-Section">
      <Card.Header>
        <h4>Configurations</h4>
      </Card.Header>
      <Card.Body>
        <Row>
          {/* Starting Coin Configuration */}
          <StartingCoin />
          {/* Needed Coin Configuration */}
          <NeededCoin />
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CoinConfiguration;
