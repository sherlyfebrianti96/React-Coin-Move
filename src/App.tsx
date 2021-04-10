import React from 'react';
import './App.css';
import CoinArea from "./components/CoinArea/CoinArea";
import {Col, Container, Row} from "react-bootstrap";
import CoinConfiguration from "./components/CoinConfiguration/CoinConfiguration";
import {v4 as uuid} from "uuid";
import {CoinValueInterface} from "./interface/CoinValueInterface";
import {CoinValueEnum} from "./enum/CoinValueEnum";

export default class App extends React.Component {
  state = {
    startingCoinArea: [],
    neededCoinAmount: null,
    neededCoinArea: []
  }

  area = {
    startingCoinBox: {
      name: 'Starting Coin',
      items: []
    }
  };

  addCoinToStartedArea(value: CoinValueEnum) {
    const startingCoinArea: Array<CoinValueInterface> = this.state.startingCoinArea;
    startingCoinArea.push({
      id: uuid,
      content: value
    });
    this.setState({
      startingCoinArea: [...startingCoinArea]
    });
  }

  handleNeededCoinChanged(value: number) {
    this.setState({
      neededCoinAmount: value
    });
  }

  render() {
    return (
      <Container className="App">
        <CoinConfiguration
          startingCoinArea={this.state.startingCoinArea}
          neededCoinAmount={this.state.neededCoinAmount}
          addCoinToStartedArea={this.addCoinToStartedArea.bind(this)}
          handleNeededCoinChanged={this.handleNeededCoinChanged.bind(this)}
        />
        <Row>
          <Col>
            <CoinArea
              name="starting-coin"
              title="Starting Coin"
              coins={this.state.startingCoinArea}
            />
          </Col>
          <Col>
            <CoinArea
              name="needed-coin"
              title="Needed Coin"
              coins={this.state.neededCoinArea}
              sort={true}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
