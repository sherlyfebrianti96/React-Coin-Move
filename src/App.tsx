import React from 'react';
import './App.css';
import CoinArea from "./components/CoinArea/CoinArea";
import {Col, Container, Row} from "react-bootstrap";
import CoinConfiguration from "./components/CoinConfiguration/CoinConfiguration";

export default class App extends React.Component {
  state = {
    startingCoinArea: [],
    neededCoinAmount: null,
    neededCoinArea: []
  }

  addCoinToStartedArea(value: number) {
    const startingCoinArea: Array<number> = this.state.startingCoinArea;
    startingCoinArea.push(value);
    this.setState({
      startingCoinArea: startingCoinArea
    });
    console.log('this.state.startingCoinArea', this.state.startingCoinArea);
  }

  render() {
    return (
      <Container className="App">
        <CoinConfiguration
          startingCoinArea={this.state.startingCoinArea}
          neededCoinAmount={this.state.neededCoinAmount}
          addCoinToStartedArea={this.addCoinToStartedArea.bind(this)}
        />
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
}
