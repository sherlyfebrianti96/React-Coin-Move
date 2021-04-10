import React from 'react';
import './CoinDashboard.css';
import {Row, Card} from "react-bootstrap";
import StartingCoin from "../StartingCoin/StartingCoin";
import NeededCoin from "../NeededCoin/NeededCoin";
import {CoinValueInterface} from "../../interface/CoinValueInterface";

interface CoinDashboardProps {
  startingCoinArea: Array<CoinValueInterface>;
  neededCoinAmount: number | null;
  addCoinToStartedArea: (value: number) => any;
  handleNeededCoinChanged: (value: number) => any;
  neededCoinArea: Array<CoinValueInterface>;
  resetApps: () => void;
}

export default class CoinDashboard extends React.PureComponent<CoinDashboardProps> {
  render() {
    return (
      <Card className="Dashboard-Section">
        <Card.Header>
          <h4>Dashboard</h4>
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
              neededCoinArea={this.props.neededCoinArea}
              resetApps={this.props.resetApps.bind(this)}
            />
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
