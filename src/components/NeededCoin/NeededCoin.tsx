import React from 'react';
import './NeededCoin.css';
import {Col, Row, FormControl} from "react-bootstrap";
import CoinMessage from "../CoinMessage/CoinMessage";
import {CoinValueInterface} from "../../interface/CoinValueInterface";

interface NeededCoinProps {
  neededCoinAmount: number | null;
  handleNeededCoinChanged: (value: number) => any;
  neededCoinArea: Array<CoinValueInterface>;
  resetApps: () => void;
}

export default class NeededCoin extends React.PureComponent<NeededCoinProps> {
  handleNeededCoinChanged(evt: React.ChangeEvent<HTMLInputElement>) {
    this.props.handleNeededCoinChanged(Number(evt.target.value));
  }

  render() {
    const neededCoinAmount: any = this.props.neededCoinAmount;

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
            <FormControl
              size="lg"
              type="number"
              name="neededCoin"
              placeholder="Input the coin amount needed"
              value={neededCoinAmount}
              onChange={this.handleNeededCoinChanged.bind(this)}
            >
            </FormControl>
          </Col>
        </Row>
        <br/>
        <CoinMessage
          neededCoinArea={this.props.neededCoinArea}
          resetApps={this.props.resetApps}
          neededCoinAmount={this.props.neededCoinAmount}
        />
      </Col>
    );
  }
}
