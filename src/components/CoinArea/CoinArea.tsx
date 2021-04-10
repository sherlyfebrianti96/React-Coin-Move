import React from "react";
import './CoinArea.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import Coin from "../Coin/Coin";
import {CoinValueEnum} from "../../enum/CoinValueEnum";

interface CoinAreaProps {
  name: string;
  title: string;
  coins: Array<number>;
  sort?: boolean;
}

class CoinArea extends React.Component<CoinAreaProps> {
  render() {
    const areaId = `coin-area-${this.props.name}`;
    console.log(this.props.coins)

    const initialCoins = [...this.props.coins];
    if (this.props.sort) {
      initialCoins.sort((a, b) => (a - b));
    }

    const coins = initialCoins.map((coin: number, index: number) => (
      <Col key={`${areaId}-${index}`}>
        <Coin value={coin} />
      </Col>
    ));

    const boxValue = initialCoins.reduce((a, b) => (a + b), 0);

    return (
      <Card className="Coin-Area" id={areaId}>
        <Card.Header>
          <h2>{this.props.title}</h2>
        </Card.Header>
        <Card.Body className="Coin-Box">
          <Row>
            {coins}
          </Row>
        </Card.Body>
        <Card.Footer className="CoinInformation">
          Current box value = {boxValue}
        </Card.Footer>
      </Card>
    );
  };
}

export default CoinArea;
