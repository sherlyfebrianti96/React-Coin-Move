import React from "react";
import './CoinArea.css';
import {Card, Col, Row} from "react-bootstrap";
import Coin from "../Coin/Coin";
import {CoinValueInterface} from "../../interface/CoinValueInterface";

interface CoinAreaProps {
  name: string;
  title: string;
  coins: Array<CoinValueInterface>;
  sort?: boolean;
}

class CoinArea extends React.PureComponent<CoinAreaProps> {
  render() {
    const areaId = `coin-area-${this.props.name}`;
    console.log(this.props.coins)

    const initialCoins = [...this.props.coins];
    if (this.props.sort) {
      initialCoins.sort((a, b) => (a.content - b.content));
    }

    const coins = initialCoins.map((coin: CoinValueInterface, index: number) => (
      <Col key={`${areaId}-${index}`}>
        <Coin value={coin.content} />
      </Col>
    ));

    const boxValue = initialCoins.reduce((a: number, b: CoinValueInterface) => (a + b.content), 0);

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
