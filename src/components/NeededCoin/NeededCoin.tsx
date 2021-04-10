import React from 'react';
import './NeededCoin.css';
import {Col, Row, FormControl} from "react-bootstrap";

function NeededCoin() {
  return (
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
  );
}

export default NeededCoin;
