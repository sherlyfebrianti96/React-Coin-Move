import React from 'react';
import './CoinConfiguration.css';
import {Row, Card} from "react-bootstrap";
import StartingCoin from "../StartingCoin/StartingCoin";
import NeededCoin from "../NeededCoin/NeededCoin";

interface CoinConfigurationProps {
  startingCoinArea: Array<number>;
  neededCoinAmount: number | null;
  addCoinToStartedArea: (value: number) => any;
  handleNeededCoinChanged: (value: number) => any;
}

export default class CoinConfiguration extends React.PureComponent<CoinConfigurationProps> {
  render() {
    return (
      <Card className="Configuration-Section">
        <Card.Header>
          <h4>Configurations</h4>
        </Card.Header>
        <Card.Body>
          <Row>
            {/* Starting Coin Configuration */}
            <StartingCoin
              startingCoinArea={this.props.startingCoinArea}
              addCoinToStartedArea={this.props.addCoinToStartedArea.bind(this)}
            />
            {/* Needed Coin Configuration */}
            <NeededCoin
              neededCoinAmount={this.props.neededCoinAmount}
              handleNeededCoinChanged={this.props.handleNeededCoinChanged.bind(this)}
            />
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
