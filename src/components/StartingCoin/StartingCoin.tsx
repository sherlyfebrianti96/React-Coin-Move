import React from 'react';
import './StartingCoin.css';
import Coin from "../Coin/Coin";
import {CoinValueEnum} from "../../enum/CoinValueEnum";
import {Col, Row, Card} from "react-bootstrap";
import {CoinValueInterface} from "../../interface/CoinValueInterface";

interface StartingCoinProps {
  startingCoinArea: Array<CoinValueInterface>;
  addCoinToStartedArea: (value: CoinValueEnum) => any;
}

export default class StartingCoin extends React.PureComponent<StartingCoinProps> {
  render() {
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
              <Col md={4}>
                <Coin
                  value={CoinValueEnum.OneCent}
                  addCoinToStartedArea={this.props.addCoinToStartedArea.bind(this)}
                  enableInput={true}
                />
              </Col>
              <Col md={4}>
                <Coin
                  value={CoinValueEnum.FiveCent}
                  addCoinToStartedArea={this.props.addCoinToStartedArea.bind(this)}
                  enableInput={true}
                />
              </Col>
              <Col md={4}>
                <Coin
                  value={CoinValueEnum.TwentyCent}
                  addCoinToStartedArea={this.props.addCoinToStartedArea.bind(this)}
                  enableInput={true}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
